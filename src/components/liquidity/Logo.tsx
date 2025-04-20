import { cn } from '@/lib/utils';
import logo from "@/assets/logo-purple.png"; 
import { useNavigate } from 'react-router-dom';   

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <img src={logo} onClick={() => navigate('/')} className={cn('h-6 w-6 cursor-pointer', className)} />
  );
};

export default Logo;