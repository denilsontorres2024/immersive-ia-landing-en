
import { useEffect, useState } from 'react';

interface BreakpointConfig {
  mobile: number;
  tablet: number;
  desktop: number;
  large: number;
}

const defaultBreakpoints: BreakpointConfig = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  large: 1440,
};

export const useResponsive = (customBreakpoints?: Partial<BreakpointConfig>) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop' | 'large'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      
      if (width < breakpoints.tablet) {
        setDeviceType('mobile');
      } else if (width < breakpoints.desktop) {
        setDeviceType('tablet');
      } else if (width < breakpoints.large) {
        setDeviceType('desktop');
      } else {
        setDeviceType('large');
      }
    };

    // Set initial values
    handleResize();

    // Add event listener with passive option for better performance
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isDesktop = deviceType === 'desktop' || deviceType === 'large';
  const isLarge = deviceType === 'large';
  
  const isMobileOrTablet = isMobile || isTablet;
  const isTabletOrDesktop = isTablet || isDesktop;

  // Utility functions for responsive design
  const getResponsiveValue = <T,>(values: {
    mobile?: T;
    tablet?: T;
    desktop?: T;
    large?: T;
    default: T;
  }): T => {
    switch (deviceType) {
      case 'mobile':
        return values.mobile ?? values.default;
      case 'tablet':
        return values.tablet ?? values.mobile ?? values.default;
      case 'desktop':
        return values.desktop ?? values.tablet ?? values.mobile ?? values.default;
      case 'large':
        return values.large ?? values.desktop ?? values.tablet ?? values.mobile ?? values.default;
      default:
        return values.default;
    }
  };

  const getGridCols = (mobile = 1, tablet = 2, desktop = 3, large = 4) => {
    return getResponsiveValue({
      mobile,
      tablet,
      desktop,
      large,
      default: desktop,
    });
  };

  const getFontSize = (mobile: string, tablet?: string, desktop?: string, large?: string) => {
    return getResponsiveValue({
      mobile,
      tablet: tablet || mobile,
      desktop: desktop || tablet || mobile,
      large: large || desktop || tablet || mobile,
      default: mobile,
    });
  };

  const getSpacing = (mobile: string, tablet?: string, desktop?: string, large?: string) => {
    return getResponsiveValue({
      mobile,
      tablet: tablet || mobile,
      desktop: desktop || tablet || mobile,
      large: large || desktop || tablet || mobile,
      default: mobile,
    });
  };

  return {
    screenSize,
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    isMobileOrTablet,
    isTabletOrDesktop,
    breakpoints,
    getResponsiveValue,
    getGridCols,
    getFontSize,
    getSpacing,
  };
};

export default useResponsive;
