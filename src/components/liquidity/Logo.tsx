import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5.5C14.76 5.5 17 7.74 17 10.5C17 13.26 14.76 15.5 12 15.5C9.24 15.5 7 13.26 7 10.5C7 7.74 9.24 5.5 12 5.5ZM12 20.3C9.25 20.3 6.84 19.01 5.28 17C5.28 14.67 9.8 13.5 12 13.5C14.2 13.5 18.72 14.67 18.72 17C17.16 19.01 14.75 20.3 12 20.3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;