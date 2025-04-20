import { motion } from "framer-motion";
import image1 from "@/assets/coin.svg";
import image2 from "@/assets/dialogue .svg";

const Stats = () => {
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
     <>
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 pb-16 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bg-background/5 border border-white/10 rounded-lg p-6 relative">
          <img
            src={image1}
            alt="Laptop"
            className="absolute top-[-70px] right-[30px] w-[120px]"
          />
          <div className="relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-primary/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white">Unique wallets</h3>
                  <p className="text-5xl font-bold text-purple-primary">
                    766,531
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-primary/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white">Total transfers</h3>
                  <p className="text-5xl font-bold text-purple-primary">
                    1,062,853
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bg-background/5 border border-white/10 rounded-lg p-6 relative">
          <img
            src={image2}
            alt="Laptop"
            className="absolute top-[-70px] right-[20px] w-[150px] z-0"
          />
          <div className="relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-primary/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M8 7v10 M16 7v10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white">Liquidity pools</h3>
                  <p className="text-5xl font-bold text-purple-primary">19</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-primary/20 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white">TVL</h3>
                  <p className="text-2xl font-bold text-purple-primary">
                    $26,049,000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-primary/20 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white">Average APR</h3>
                  <p className="text-2xl font-bold text-purple-primary">
                    6.05%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Stats;
