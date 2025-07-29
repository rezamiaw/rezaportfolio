"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface PerformanceOptimizerProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  unloadWhenHidden?: boolean;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  fallback = <div className="h-32 bg-muted animate-pulse rounded-lg" />,
  rootMargin = "200px",
  threshold = 0,
  unloadWhenHidden = false,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        
        if (visible && !hasBeenVisible) {
          setHasBeenVisible(true);
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
  }, [threshold, rootMargin, hasBeenVisible]);

  // Determine if we should render the component
  const shouldRender = unloadWhenHidden ? isVisible : hasBeenVisible;

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
};

export default PerformanceOptimizer; 