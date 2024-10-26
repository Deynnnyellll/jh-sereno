import Hero from "./assets/components/hero";
import SearchBar from "./assets/components/searchBar";
import MarketingPlan from "./assets/components/marketingPlan";
import SellingProcess from "./assets/components/sellingProcess";
import Process from "./assets/components/process";
import Showcase from "./assets/components/showcase";
import Market from "./assets/components/market";
import Partners from "./assets/components/partners";
import WorkWithUs from "./assets/components/workWithUs";
import { Context } from "./assets/context/context";
import Footer from "./assets/components/footer";
import { useState, useEffect } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const controlNavBar = () => {
    if (window.scrollY > lastScroll) {
      setShow(true);
    }
    else {
      setShow(false);
    }

    setLastScroll(window.scrollY)
};


useEffect(() => {
    window.addEventListener('scroll', controlNavBar);

    return () => {
    window.removeEventListener('scroll', controlNavBar);
    }
});

  return (
    <Context.Provider value={{modal, setModal, show}}>
      <div className="font-playFair text-white overflow-x-hidden">
        <Hero />
        <SearchBar />
        <MarketingPlan />
        <SellingProcess />
        <Process />
        <Showcase />
        <Market />
        <Partners />
        <WorkWithUs />
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default App
