
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  autoFit?: boolean;
  minItemWidth?: string;
}

const ResponsiveGrid = ({ 
  children, 
  className,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'md',
  autoFit = false,
  minItemWidth = '280px'
}: ResponsiveGridProps) => {
  const gapClasses = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6 lg:gap-8',
    lg: 'gap-6 sm:gap-8 lg:gap-10',
    xl: 'gap-8 sm:gap-10 lg:gap-12'
  };

  const getGridCols = () => {
    if (autoFit) {
      return {
        gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
      };
    }

    const colClasses = [];
    if (columns.sm) colClasses.push(`grid-cols-${columns.sm}`);
    if (columns.md) colClasses.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) colClasses.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) colClasses.push(`xl:grid-cols-${columns.xl}`);
    
    return { className: colClasses.join(' ') };
  };

  const gridConfig = getGridCols();

  return (
    <div 
      className={cn(
        'grid',
        gapClasses[gap],
        !autoFit && gridConfig.className,
        className
      )}
      style={autoFit ? gridConfig : undefined}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;
