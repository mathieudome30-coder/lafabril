// Fix: Import React to resolve 'React' namespace error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  category: 'STUDIO' | 'MÉDIA' | 'ACADÉMIE';
  description: string;
  features: string[];
  killerArgument: string;
  icon: React.ReactNode;
}

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
}