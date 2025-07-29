"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => (
  <motion.div
    className={`bg-muted rounded animate-pulse ${className}`}
    initial={{ opacity: 0.6 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
  />
);

export const CardProfileSkeleton: React.FC = () => (
  <div className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
    <Skeleton className="h-10 w-72 mb-4" />
    <div className="flex items-center mb-4">
      <Skeleton className="h-5 w-5 mr-2" />
      <Skeleton className="h-6 w-48" />
    </div>
    <div className="space-y-2 mb-6">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="flex justify-end space-x-4">
      <Skeleton className="h-6 w-6" />
      <Skeleton className="h-6 w-6" />
      <Skeleton className="h-6 w-6" />
    </div>
  </div>
);

export const SkillsSkeleton: React.FC = () => (
  <div className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
    <Skeleton className="h-10 w-40 mb-4" />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center bg-muted p-2 rounded-md border border-border">
          <Skeleton className="h-6 w-6 mb-2" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  </div>
);

export const WorkExperienceSkeleton: React.FC = () => (
  <div className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
    <Skeleton className="h-10 w-64 mb-4" />
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="mb-4 rounded-lg p-4 border border-border">
        <div className="flex items-center mb-2">
          <Skeleton className="h-6 w-6 mr-2" />
          <Skeleton className="h-8 w-72" />
        </div>
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-5 w-40 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    ))}
  </div>
);

export const ProjectsSkeleton: React.FC = () => (
  <div className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
    <Skeleton className="h-10 w-48 mb-4" />
    <div className="mb-4 rounded-lg p-4 border border-border">
      <div className="flex flex-col md:flex-row items-start">
        <Skeleton className="w-full h-32 md:w-24 md:h-24 rounded-md mb-4 md:mr-4" />
        <div className="flex-1">
          <Skeleton className="h-8 w-64 mb-2" />
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skeleton; 