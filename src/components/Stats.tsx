import { motion } from "framer-motion";
import coinIcon from "@/assets/coin.svg";
import transferIcon from "@/assets/transfer.svg";

const Stats = () => {
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full bg-[#000011] relative py-20">
      <div className="container mx-auto px-6 md:max-w-5xl">
        <motion.div
          className="grid grid-cols-2 gap-x-32 gap-y-20 relative mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Cross lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 w-px h-full bg-gray-800/50 transform -translate-x-1/2"></div>
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-800/50 transform -translate-y-1/2"></div>
              {/* Center star */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-4 h-4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                      fill="#333"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            className="flex flex-col items-start"
            variants={statVariants}
          >
            <p className="text-gray-400 text-sm font-light mb-1">
              Unique wallets
            </p>
            <p className="text-[#2FD0A6] text-5xl font-normal">875,603</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-end"
            variants={statVariants}
          >
            <p className="text-gray-400 text-sm font-light mb-1">TVL</p>
            <p className="text-[#9FE634] text-5xl font-normal">$45,744,936</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start"
            variants={statVariants}
          >
            <p className="text-gray-400 text-sm font-light mb-1">
              Total transfers
            </p>
            <p className="text-[#2FD0A6] text-5xl font-normal">1,728,967</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-end"
            variants={statVariants}
          >
            <p className="text-gray-400 text-sm font-light mb-1">Blockchains</p>
            <p className="text-[#4A7CF6] text-5xl font-normal">21</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute left-1/4 bottom-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={transferIcon} alt="Transfer icon" className="w-10 h-10" />
        </motion.div>
        <motion.div
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={coinIcon} alt="Coin icon" className="w-10 h-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
