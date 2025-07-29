"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Hook for debouncing values
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Hook for throttling functions
export const useThrottle = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): T => {
  const lastCall = useRef<number>(0);
  const throttledFn = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        return fn(...args);
      }
    },
    [fn, delay]
  ) as T;

  return throttledFn;
};

// Hook for intersection observer
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
};

// Hook for lazy loading with viewport detection
export const useLazyLoad = (rootMargin = "50px", threshold = 0.1) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.unobserve(element);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin, threshold]);

  return { elementRef, shouldLoad };
};

// Hook for preloading resources
export const usePreload = (resources: string[]) => {
  const [loadedResources, setLoadedResources] = useState<Set<string>>(new Set());

  useEffect(() => {
    const preloadResource = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        if (src.match(/\.(png|jpe?g|gif|svg|webp)$/i)) {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = reject;
          img.src = src;
        } else {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = src;
          link.onload = () => resolve();
          link.onerror = reject;
          document.head.appendChild(link);
        }
      });
    };

    const preloadAll = async () => {
      const results = await Promise.allSettled(
        resources.map(async (resource) => {
          await preloadResource(resource);
          return resource;
        })
      );

      const loaded = new Set<string>();
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          loaded.add(resources[index]);
        }
      });

      setLoadedResources(loaded);
    };

    if (resources.length > 0) {
      preloadAll();
    }
  }, [resources]);

  return { loadedResources };
};

// Hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    componentCount: 0,
    memoryUsage: 0,
  });

  const startTime = useRef<number>(Date.now());

  const updateMetrics = useCallback(() => {
    const renderTime = Date.now() - startTime.current;
    const componentCount = document.querySelectorAll('[data-component]').length;
    
    let memoryUsage = 0;
    if ('memory' in performance) {
      const performanceWithMemory = performance as Performance & {
        memory?: { usedJSHeapSize: number };
      };
      memoryUsage = (performanceWithMemory.memory?.usedJSHeapSize || 0) / (1024 * 1024);
    }

    setMetrics({
      renderTime,
      componentCount,
      memoryUsage,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  const resetTimer = useCallback(() => {
    startTime.current = Date.now();
  }, []);

  return { metrics, resetTimer };
};

// Hook for optimized scroll handling
export const useOptimizedScroll = (callback: () => void, delay = 100) => {
  const throttledCallback = useThrottle(callback, delay);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);
};

// Named export object to avoid anonymous default export
export const performanceHooks = {
  useDebounce,
  useThrottle,
  useIntersectionObserver,
  useLazyLoad,
  usePreload,
  usePerformanceMonitor,
  useOptimizedScroll,
}; 