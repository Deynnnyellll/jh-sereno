import ModalMarket from "./modalMarket";
import { market } from "../constants/constants";
import { useState, useContext } from "react";
import { Context } from "../context/context";

function Market() {
    const [title, setTitle] = useState();
    const [detail, setDetail] = useState();
    const [img, setImg] = useState();

    const {modal, setModal} = useContext(Context)

    function handleShowModal(title, detail, img) {
        setModal(prevState => !prevState);
        setTitle(title);
        setDetail(detail);
        setImg(img);
    }

  return (
    <div className="mt-36 mb-28 w-full text-black flex flex-col items-center justify-center text-center gap-4 font-karla">
        <h1 className="text-4xl mb-4 font-playFair"> We Market Your Home to The World </h1>
        <h4 className="font-karla font-bold text-2xl"> Our Online Marketing Strategy</h4>
        <p className="w-[80%] mb-10 text-xl"> ​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally. </p>
        
        <div className="w-[80%] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
            {
                market.map((item, index) => (
                    <div key={index} 
                        className="bg-white rounded-md shadow-container p-4 md:p-0 h-[200px] md:h-[300px] w-[80%] md:w-[30%] flex flex-col items-center justify-center gap-4 md:gap-8 outline outline-3 outline-slate-400 hover:scale-105 ease-in-out duration-200 cursor-pointer"
                        onClick={() => handleShowModal(item.title, item.details, item.image)}
                    > 
                        <img src={item.image} alt="" className="w-[30%]"/>
                        <h1 className="text-xl md:text-3xl font-karla"> {item.title} </h1>
                    </div>
                ))
            }

            { modal && <ModalMarket title={title} image={img} details={detail}/> }
        </div>
    </div>
  )
}

export default Market