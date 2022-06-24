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
    </>
  );
};

export default App;
