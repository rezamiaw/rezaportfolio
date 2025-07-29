"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
  className?: string;
  once?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  fallback = <div className="h-32 bg-muted animate-pulse rounded-lg" />,
  className = "",
  once = true,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once, hasIntersected]);

  const shouldRender = once ? hasIntersected : isIntersecting;

  return (
    <div ref={ref} className={className}>
      {shouldRender ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazyLoad; 