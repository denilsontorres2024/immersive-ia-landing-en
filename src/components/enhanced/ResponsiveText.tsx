
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  className?: string;
  gradient?: boolean;
  responsive?: boolean;
}

const ResponsiveText = ({
  children,
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  className,
  gradient = false,
  responsive = true
}: ResponsiveTextProps) => {
  const sizeClasses = {
    xs: responsive ? 'text-xs sm:text-sm' : 'text-xs',
    sm: responsive ? 'text-sm sm:text-base' : 'text-sm',
    base: responsive ? 'text-base sm:text-lg' : 'text-base',
    lg: responsive ? 'text-lg sm:text-xl lg:text-2xl' : 'text-lg',
    xl: responsive ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-xl',
    '2xl': responsive ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl',
    '3xl': responsive ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-3xl',
    '4xl': responsive ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-4xl',
    '5xl': responsive ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-5xl',
    '6xl': responsive ? 'text-6xl sm:text-7xl lg:text-8xl' : 'text-6xl',
    '7xl': responsive ? 'text-7xl sm:text-8xl lg:text-9xl' : 'text-7xl'
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black'
  };

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        gradient && 'gradient-text',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ResponsiveText;
