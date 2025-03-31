import { motion } from "framer-motion";
import {
  ArrowDownUpIcon,
  ArrowRight,
  CoinsIcon,
  Droplet,
  Gift,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Avax from "cryptocurrency-icons/svg/color/avax.svg";
import Usdt from "cryptocurrency-icons/svg/color/usdt.svg";

const DetailsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 p-2 ">
        <div className="">
          <h1 className="text-2xl ps-6 mt-4"> 0.0</h1>
        </div>
        <div className="flex w-full">
          <motion.button
            className="w-100 shadow border bg-purple flex items-center gap-2 bg-allbridge-green text-black py-1 px-6 rounded-full hover:bg-allbridge-darkGreen transition-colors float-right"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-5">
              <CoinsIcon className="text-purple-500" />
              <div>
                <strong>USDT</strong>
                <br />
                <span className="text-[10px]">Arbrtium</span>
              </div>
            </div>{" "}
            <ArrowRight size={18} />
          </motion.button>
        </div>
        <div className="connect-button text-center bg-violet-50 text-violet-500 font-semibold mx-3 py-2 rounded-full">
          Connect wallet
        </div>
      </div>
      <div className="flex items-center gap-35 sm:flex sm:flex-row-reverse py-3 ">
        <strong>~1min</strong>
        <div>
          <ArrowDownUpIcon className="text-purple-500 w-6 h-6 bg-purple-50 rounded-full p-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2 ">
        <div className="">
          <h1 className="text-2xl ps-6 mt-4"> 0.0</h1>
        </div>
        <div className="flex w-full">
          <motion.button
            className=" mx-auto w-64 shadow border bg-purple flex items-center gap-2 bg-allbridge-green text-black py-1 px-6 rounded-full font-medium hover:bg-allbridge-darkGreen transition-colors float-right"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-5">
              <CoinsIcon className="text-purple-500" />
              <div>
                <strong>USDT</strong>
                <br />
                <span className="text-[10px]">Arbrtium</span>
              </div>
            </div>{" "}
            <ArrowRight size={18} />
          </motion.button>
        </div>
        <div className="connect-button text-center bg-violet-50 text-violet-500 font-semibold  py-2 rounded-full">
          Connect wallet
        </div>
        <div className="connect-button text-center border text-violet-500 font-semibold  py-2 rounded-full">
          Paste address
        </div>
      </div>

      <div className=" w-full grid grid-cols-2 mt-2 gap-4 p-2 bg-violet-50 text-violet-500 mx-3 rounded-2xl">
        <div className="flex items-center ps-3 gap-4 py-1 ">
          <Droplet className="text-purple-500 w-5 h-5" />
          <div>
            <strong>Extar Gas</strong>
          </div>
        </div>

        <div className="flex items-center pe-5 flex-row-reverse">
          <Switch className="text-purple-500" />
        </div>
      </div>
      <div className=" w-full grid grid-cols-2 mt-2 gap-4 p-2 bg-violet-50 text-violet-500 mx-3 rounded-2xl">
        <div className="flex items-center ps-3 gap-4 py-1 ">
          <Gift className="text-purple-500 w-5 h-5" />
          <div>
            <strong>Relayer fee</strong>
          </div>
        </div>

        <div className="flex gap-2 text-xs items-center pe-5 flex-row-reverse">
          <div className="flex hover:bg-purple-100 cursor-pointer rounded-full p-2">
            <img src={Usdt} alt="USDT" className="w-4 h-4" />
            <p>USDT</p>
          </div>
          <div className="flex bg-purple-100 cursor-pointer rounded-full p-2">
            <img src={Avax} alt="AVAX" className="w-4 h-4" />
            <p>AVAX</p>
          </div>
        </div>
      </div>

      <button className=" w-full mt-5 font-semibold text-center bg-purple-500 text-white mx-3 py-2.5 rounded-full">
        Send
      </button>
    </div>
  );
};

export default DetailsCard;
