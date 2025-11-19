
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'interactive' | 'glow' | 'elevated';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  onClick?: () => void;
}

const ResponsiveCard = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = true,
  onClick
}: ResponsiveCardProps) => {
  const variantClasses = {
    default: 'card-responsive',
    interactive: 'card-interactive',
    glow: 'card-glow',
    elevated: 'card-responsive shadow-strong hover:shadow-epic'
  };

  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6 lg:p-8',
    lg: 'p-6 sm:p-8 lg:p-10',
    xl: 'p-8 sm:p-10 lg:p-12'
  };

  return (
    <div
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        hover && variant === 'default' && 'hover:scale-[1.02] transition-transform duration-200',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ResponsiveCard;
