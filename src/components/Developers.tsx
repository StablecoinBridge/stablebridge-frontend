import { motion } from "framer-motion";

const Developers = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:max-w-5xl">
      <div className="w-full relative overflow-hidden">
        {/* Large logo watermark */}
        <div className="absolute  right-0 top-0 w-[70%] h-full opacity-30">
        <img 
          src="/logo-watermark.svg" 
          alt="Logo watermark" 
          className="w-full h-full object-cover"
        />
      </div>


      <div className="mx-auto">
        <h3 className="text-white text-4xl font-semibold mb-6">Developers</h3>
        {/* Header Section */}
        <div className="mb-12 bg-[#002016] flex items-center border border-gray-500 py-6 h-[30vh] px-6">
          <div className="">
          <h2 className="text-4xl font-normal text-white mb-3">Allbridge Core</h2>
          <p className="text-gray-400 text-sm font-semibold max-w-xs">
            Bring cross-chain transfers directly to your protocol
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-2.5 mt-6 rounded-full border border-[#2FD0A6] text-[#2FD0A6] hover:bg-[#2FD0A6]/10 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Allbridge Core Docs
          </motion.a>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SDK Card */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src="/sdk-icon.svg" alt="SDK" className="w-14 h-14" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">SDK</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
              Explore our SDK to bring cross-chain functionality to your protocol
            </p>
            <motion.a
              href="#"
              className="flex items-center justify-center px-8 py-2.5 border w-2/3 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Github
            </motion.a>
          </motion.div>

          {/* Integration Guidelines Card */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src="/integration-icon.svg" alt="Integration" className="w-14 h-14" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Integration Guidelines</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
              Follow our examples to streamline the integration process
            </p>
            <motion.a
              href="#"
              className="flex items-center justify-center px-8 py-2.5 border w-2/3 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Guide
            </motion.a>
          </motion.div>

          {/* Technical Reference Card */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src="/docs-icon.svg" alt="Documentation" className="w-14 h-14" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Technical Reference</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
              Explore the basics behind Allbridge Core by visiting our docs
            </p>
            <motion.a
              href="#"
              className="flex items-center justify-center px-8 py-2.5 border w-2/3 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Docs
            </motion.a>
          </motion.div>

          {/* About Core Card */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/10 border border-gray-800/50 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute right-6 top-6">
              <img src="/about-icon.svg" alt="About" className="w-14 h-14" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">About Core</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-[250px] font-semibold">
              Cross-chain swaps, extra gas, messaging protocols
            </p>
            <motion.a
              href="#"
              className="flex items-center justify-center px-8 py-2.5 border w-2/3 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Learn more
            </motion.a>
          </motion.div>
        </div>

        {/* Collaborations Section */}
        <div className="mt-16 text-center relative">
          <h3 className="text-xl font-semibold text-white mb-3">Collaborations</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm font-semibold">
            Reach out to our development team if you need additional help with the integration
          </p>
          <motion.button
            className="px-8 py-2.5 rounded-full bg-black/20 border w-1/3 text-white hover:bg-black/30 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Contact us
          </motion.button>
          
          {/* Decorative elements */}
          <div className="absolute left-0 bottom-0">
            <img src="/collab-left.svg" alt="" className="w-32 h-32 opacity-50" />
          </div>
          <div className="absolute right-0 bottom-0">
            <img src="/collab-right.svg" alt="" className="w-32 h-32 opacity-50" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Developers;