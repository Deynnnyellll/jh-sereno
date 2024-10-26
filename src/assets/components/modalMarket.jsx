import { Context } from "../context/context";
import { useContext } from "react";

function ModalMarket({ title, image ,details }) {
    const { setModal } = useContext(Context)

  return (
    <div className="absolute w-screen h-[90vh] bg-black bg-opacity-40">
        <div className="z-50 absolute w-[85vw] md:w-[35vw] h-[65vh] md:h-[65vh] outline outline-2 shadow-2xl outline-slate-400 bg-slate-100 shadow-container flex items-center justify-center rounded-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <button className="text-4xl absolute font-karla top-10 right-10 text-black" onClick={() => setModal(prevState => !prevState)}> X </button>
        <div className="px-6 font-karla flex flex-col items-center justify-center">
            <img src={image} alt="" className="w-[40%] md:w-[20%] mb-4"/>
            <h1 className="text-2xl md:text-3xl mb-5 font-semibold"> {title} </h1>
            <p className="text-md p-4 md:p-0 md:text-lg text-center"> {details} </p>
        </div>
    </div>
    </div>
  )
}

export default ModalMarket