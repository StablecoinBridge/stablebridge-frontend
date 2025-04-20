import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import liquidity from "@/assets/liquidity.png";
import versatile from "@/assets/2.png";
import gas from "@/assets/3.png";

const FeatureTabs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Stablebridge Core features</h2>
      <Tabs defaultValue="liquidity" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-background/5 border border-white/10">
          <TabsTrigger 
            value="liquidity" 
            className="data-[state=active]:bg-purple-primary/20 text-white data-[state=active]:text-purple-primary"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              </svg>
              Liquidity pools
            </div>
          </TabsTrigger>
          <TabsTrigger 
            value="versatile"
            className="data-[state=active]:bg-purple-primary/20 text-white data-[state=active]:text-purple-primary"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              </svg>
              Versatile
            </div>
          </TabsTrigger>
          <TabsTrigger 
            value="gas"
            className="data-[state=active]:bg-purple-primary/20 text-white data-[state=active]:text-purple-primary"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              </svg>
              Extra gas
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="liquidity" className="mt-6">
          <div className="bg-background/5 border border-white/10 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-semibold text-white">Native liquidity pools</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Bridge without wrapped tokens
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    No impermanent loss
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    LP rewards in native stablecoins
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img src={liquidity} alt="Liquidity Features" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="versatile" className="mt-6">
          <div className="bg-background/5 border border-white/10 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-semibold text-white">Versatile</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Messaging-agnostic swaps
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Non-custodial experience
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    CCTP-powered USDC transfers
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img src={versatile} alt="Versatile Features" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gas" className="mt-6">
          <div className="bg-background/5 border border-white/10 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-semibold text-white">Extra gas</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Attach additional gas on destination
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Seamless onboarding to new chains
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Flexible relayer fees
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img src={gas} alt="Gas Features" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeatureTabs;
