import { cn } from '@/lib/utils';
import logo from "@/assets/logo-purple.png"; 

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img src={logo}  className={cn('h-6 w-6', className)} />
  );
};

export default Logo;