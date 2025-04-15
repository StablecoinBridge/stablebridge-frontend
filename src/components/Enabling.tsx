import { motion } from "framer-motion";
import SDKImage from "@/assets/collaboration-r.svg";
import IntegrationImage from "@/assets/collaboration-l.svg";
import DocsImage from "@/assets/collaboration-r.svg";
import AboutImage from "@/assets/collaboration-r.svg";



const Enabling = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:max-w-5xl">      

      <div className="mx-auto">
        <h1 className="text-white text-4xl text-center font-semibold mb-6">Enabling cross-chain interactions</h1>
        {/* Header Section */}
    

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expertise */}
          <motion.div 
            className="p-6 rounded-br-4xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src={SDKImage} alt="SDK" className="w-20 h-20" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Expertise</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
            Our team consists of experienced developers with extensive knowledge of building cross-chain applications
            </p>
            
          </motion.div>

          {/* Continuous innovation */}
          <motion.div 
            className="p-6 rounded-bl-4xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
                <img src={IntegrationImage} alt="Integration" className="w-20 h-20" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Continuous innovation</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
            Allbridge is dedicated to staying at the forefront of the cross-chain market, continuously expanding access to new blockchains
            </p>
          
          </motion.div>

          {/* Prioritizing user experience */}
          <motion.div 
            className="p-6 rounded-tr-4xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src={DocsImage} alt="Documentation" className="w-20 h-20" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Prioritizing user experience</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
            We make the bridging experience more approachable to newcomers and connect unique networks with more established EVM ecosystems
            </p>
          </motion.div>

          {/* Flexible integration */}
          <motion.div 
            className="p-6 rounded-tl-4xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src={AboutImage} alt="About" className="w-20 h-20" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Flexible integration</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
            Allbridge Core offers multiple integration options, enabling seamless access to cross-chain stablecoin payments
            </p>
          
          </motion.div>
        </div>     
      </div>
    </div>
  );
};

export default Enabling;