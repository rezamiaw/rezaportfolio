"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Safari-specific image load handling with timeout fallback
  useEffect(() => {
    if (isIntersecting) {
      // Set a timeout fallback for Safari in case onLoad doesn't fire
      timeoutRef.current = setTimeout(() => {
        // Find the image element in the container and check if it's loaded
        const container = containerRef.current;
        if (container) {
          const img = container.querySelector('img');
          if (img && img.complete && img.naturalWidth > 0 && !isLoaded) {
            setIsLoaded(true);
            onLoad?.();
          }
        }
      }, 150);

      // Additional check after a longer delay for slow connections
      const longTimeout = setTimeout(() => {
        const container = containerRef.current;
        if (container) {
          const img = container.querySelector('img');
          if (img && img.complete && img.naturalWidth > 0 && !isLoaded) {
            setIsLoaded(true);
            onLoad?.();
          }
        }
      }, 2000);

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        clearTimeout(longTimeout);
      };
    }
  }, [isIntersecting, onLoad, isLoaded]);

  const handleLoad = () => {
    if (!isLoaded) {
      setIsLoaded(true);
      onLoad?.();
    }
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Force load check for Safari
  const handleImageRef = (node: HTMLImageElement | null) => {
    if (node) {
      if (node.complete && node.naturalWidth > 0) {
        setIsLoaded(true);
        onLoad?.();
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      <motion.div
        className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ 
          display: isLoaded ? 'none' : 'flex',
          pointerEvents: isLoaded ? 'none' : 'auto' 
        }}
      >
        {!hasError && (
          <div className="text-muted-foreground text-sm">Loading...</div>
        )}
        {hasError && (
          <div className="text-muted-foreground text-sm">Failed to load</div>
        )}
      </motion.div>

      {/* Actual Image */}
      {isIntersecting && (
        <motion.img
          ref={handleImageRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            display: 'block'
          }}
        />
      )}
    </div>
  );
};

export default LazyImage; 