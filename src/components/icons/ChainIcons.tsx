
import React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ArbitrumIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#12AAFF" />
    <path d="M12.4664 5L8.01855 12.5551L12.4463 15.0336L16.9142 12.5551L12.4664 5Z" fill="white" />
    <path d="M8.01855 13.4829L12.4463 19L16.8941 13.4829L12.4463 15.9614L8.01855 13.4829Z" fill="white" />
  </svg>
);

export const AvalancheIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#E84142" />
    <path d="M16.5 15.5L12.5 8L8.5 15.5H16.5Z" fill="white" />
  </svg>
);

export const BaseIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#0052FF" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const BNBIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#F0B90B" />
    <path d="M8.25 12L12 8.25L15.75 12L12 15.75L8.25 12Z" fill="white" />
    <path d="M12 6L15 9L12 12L9 9L12 6Z" fill="white" />
    <path d="M12 12L15 15L12 18L9 15L12 12Z" fill="white" />
    <path d="M6 12L9 9L12 12L9 15L6 12Z" fill="white" />
    <path d="M18 12L15 15L12 12L15 9L18 12Z" fill="white" />
  </svg>
);

export const CeloIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-6 w-6', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#FBCC5C" />
    <path d="M7.5 8.5C7.5 7.67157 8.17157 7 9 7H15C15.8284 7 16.5 7.67157 16.5 8.5V15.5C16.5 16.3284 15.8284 17 15 17H9C8.17157 17 7.5 16.3284 7.5 15.5V8.5Z" stroke="black" strokeWidth="1.5" />
  </svg>
);

export const EthereumIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-9 w-9', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#627EEA" />
    <path d="M12 6V10.8L16 12.6L12 6Z" fill="white" fillOpacity="0.6" />
    <path d="M12 6L8 12.6L12 10.8V6Z" fill="white" />
    <path d="M12 16.5V19L16 13.5L12 16.5Z" fill="white" fillOpacity="0.6" />
    <path d="M12 19V16.5L8 13.5L12 19Z" fill="white" />
    <path d="M12 15.6L16 12.6L12 10.8V15.6Z" fill="white" fillOpacity="0.2" />
    <path d="M8 12.6L12 15.6V10.8L8 12.6Z" fill="white" fillOpacity="0.6" />
  </svg>
);

export const OptimismIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-9 w-9', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#FF0420" />
    <circle cx="12" cy="12" r="4" fill="white" />
  </svg>
);

export const PolygonIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-9 w-9', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#8247E5" />
    <path d="M15.5 9.5L12.5 8L9.5 9.5V14.5L12.5 16L15.5 14.5V9.5Z" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const AllChainIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-9 w-9', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#f0f0f0" />
    <path 
      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" 
      stroke="#333" 
      strokeWidth="1.5" 
    />
    <path 
      d="M12 8V12L14 14" 
      stroke="#333" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const getChainIcon = (chain: string): React.ReactElement => {
  switch (chain) {
    case 'All':
      return <AllChainIcon />;
    case 'ARB':
      return <ArbitrumIcon />;
    case 'AVA':
      return <AvalancheIcon />;
    case 'BAS':
      return <BaseIcon />;
    case 'BSC':
      return <BNBIcon />;
    case 'CEL':
      return <CeloIcon />;
    case 'ETH':
      return <EthereumIcon />;
    case 'OPT':
      return <OptimismIcon />;
    case 'POL':
      return <PolygonIcon />;
    default:
      return <AllChainIcon />;
  }
};
