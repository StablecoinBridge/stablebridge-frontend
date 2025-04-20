import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="pb-16 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">FAQ</h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-background/5 border border-white/10 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 text-lg text-white hover:no-underline">
              What is the difference between Stablebridge Core and Stablebridge Bridge?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-300">
                Stablebridge Core focuses specifically on native stablecoin transfers powered by native liquidity pools. It offers a more convenient user experience since it operates without wrapping the tokens. Stablebridge Core also provides access to unique Tron USDT, which is not supported by the Classic bridge.
              </p>
              <p className="text-gray-300 mt-4">
                Stablebridge Classic remains a more versatile bridging solution, supporting both native and wrapped token transfers, and also leverages a wider selection of blockchains.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-background/5 border border-white/10 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 text-lg text-white hover:no-underline">
              Where can I find details about my transaction?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-300">
                Core Explorer offers a convenient tool for tracking transaction history, including chains, messaging protocols, and much more! Learn more details about your Core transfers here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-background/5 border border-white/10 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 text-lg text-white hover:no-underline">
              Do you plan on integrating more chains with Stablebridge Core?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-300">
                We continuously expand the list of available tokens and networks. You may find the most up-to-date news on our social channels.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-background/5 border border-white/10 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 text-lg text-white hover:no-underline">
              Why does the bridge UI indicate that I will receive more tokens on the destination chain than I send?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-300">
                The bridge incentivizes the users to bridge the assets back to the pool, which is out of balance, by offering a better exchange rate. In some instances, for example, if there was a sizeable outgoing transfer, rebalancing the pool may result in users receiving more than they transferred.
              </p>
              <p className="text-gray-300 mt-2">
                Access the corresponding section to learn more about liquidity pools.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
