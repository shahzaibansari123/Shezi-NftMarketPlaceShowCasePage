import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

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
      <SectionWrapper
        title="Deployment"
        description="NFTs Market place is built using Expo which Runs natively on all user's devices. You can easily get your App into People's Hand"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the Store"
        description="the App contain two Screens, the first one show all Nfts while the second one show Details of specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center bg-primary items-center flex-col text-center banner04">
      <p className={`${styles.pText} ${styles.whiteText}`} >
        Made by {"      "}
        <a href="https://github.com/shahzaibansari123" style={{fontStyle: "italic" , fontWeight: "bold"}}>Shahzaib Ansari</a>
      </p>
      </div>
    </>
  );
};

export default App;
