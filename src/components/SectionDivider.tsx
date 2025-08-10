'use client';

import React from 'react';

type SectionDividerProps = {
  className?: string;
};

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`relative h-8 md:h-12 w-full flex items-center justify-center ${className}`} role="separator" aria-orientation="horizontal">
      <div className="w-full h-px bg-[linear-gradient(90deg,transparent,#00e5ff,#00f5d4,#ff2bd6,transparent)] opacity-70" />
      <div className="absolute">
        <div className="relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]">
          <span className="absolute -inset-1.5 md:-inset-2 rounded-full blur-md opacity-60 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]" />
        </div>
      </div>
    </div>
  );
}

