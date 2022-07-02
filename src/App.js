import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling and growing"
        description="Buy, store, Collect NFTs, exchange and earn Crypto. Join 50+ million using Nft Marketplace Application"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart user interface marketplace"
        description="Experience a Buttery UI of NFTs market place App. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
    </>
  );
};

export default App;
