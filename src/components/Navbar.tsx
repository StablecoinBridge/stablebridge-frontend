import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-5 px-6 md:px-10 flex items-center justify-between relative z-50"
    >
      <div className="flex items-center space-x-8">
        <a href="/" className="text-white font-semibold">Company</a>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Allbridge Core</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Allbridge Classic</a>
        </div>
      </div>

      <div className="hidden md:block">
        <a href="/" className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="black"/>
            <path d="M13.5 17C15.9853 17 18 14.9853 18 12.5C18 10.0147 15.9853 8 13.5 8C11.0147 8 9 10.0147 9 12.5C9 14.9853 11.0147 17 13.5 17Z" fill="white"/>
            <path d="M13.5 32C15.9853 32 18 29.9853 18 27.5C18 25.0147 15.9853 23 13.5 23C11.0147 23 9 25.0147 9 27.5C9 29.9853 11.0147 32 13.5 32Z" fill="white"/>
            <path d="M26.5 32C28.9853 32 31 29.9853 31 27.5C31 25.0147 28.9853 23 26.5 23C24.0147 23 22 25.0147 22 27.5C22 29.9853 24.0147 32 26.5 32Z" fill="white"/>
            <path d="M26.5 17C28.9853 17 31 14.9853 31 12.5C31 10.0147 28.9853 8 26.5 8C24.0147 8 22 10.0147 22 12.5C22 14.9853 24.0147 17 26.5 17Z" fill="white"/>
          </svg>
          <span className="text-white font-semibold ml-2">Allbridge</span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#" className="nav-button nav-button-outline hidden md:flex">Developers</a>
        <a href="#" className="nav-button nav-button-filled">Contacts</a>
      </div>
    </motion.header>
  );
};

export default Navbar;
