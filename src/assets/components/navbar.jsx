import HamburgerMenu from "./hamburgerMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useContext } from "react";
import { Context } from "../context/context";

function Navbar() {
    const [isShow, setIsShow] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const nav = ["MEET THE TEAM", 'SEARCH FOR HOMES', "OUR COMMUNITIES", 'HOME EVALUATION', "SERVICES", "HOME ACROSS AMERICA", "TESTIMONIALS"];
    const burgerMenu = ["Home", "Contact Us"];
    const { show } = useContext(Context);

  return (
    <div> 
        <div className={`w-full py-14 px-10 flex items-center justify-between ${show && 'bg-black bg-opacity-85 backdrop-blur-2xl fixed z-50'} duration-300`}>
            <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" className="w-[40%] md:w-[10%]" alt="logo" />
            <ul className="hidden md:flex transition ease-in-out duration-300 gap-6">
                {
                    nav.map((item, index) => (
                        <li key={index} className="font-karla font-bold cursor-pointer" onMouseEnter={() => setIsHover(index)} onMouseLeave={() => setIsHover(null)}>
                            <p className="text-sm" > {item} </p>
                            <div className={`mt-[-1px] h-[1px] rounded-full bg-slate-400 ${isHover === index ? "w-full" : "w-0"} duration-200 ease-in-out`}></div>
                        </li>
                    ))
                }
            </ul>

            <RxHamburgerMenu  className="text-3xl hover:text-slate-300 ease-in-out duration-200 cursor-pointer" onClick={() => setIsShow(prevState => !prevState)} />
            <HamburgerMenu nav={burgerMenu} isShow={isShow} toggle={() => setIsShow(prevState => !prevState)} />
        </div>
    </div>
  )
}

export default Navbar;