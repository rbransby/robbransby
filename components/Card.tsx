import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false 
}) => {
  const baseStyles = 'bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8';
  const hoverStyles = hover ? 'transition-shadow duration-200 hover:shadow-md' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
