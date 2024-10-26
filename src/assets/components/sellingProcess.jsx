import { useEffect, useState } from "react";
import Carousel from "./carousel";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function SellingProcess() {
    const [current, setCurrent] = useState(0);


    function handleNext() {
        if(current < 4) {
            setCurrent(prevState => prevState + 1)
        }
    }

    function handleBack() {
        if(current > 0) {
            setCurrent(prevState => prevState - 1)
        }
    }

  return (
    <div className="w-full flex items-center justify-center mt-24 mb-5 ml-[-1%] md:ml-0">
        <MdArrowBackIos className="text-white text-5xl h-[50vh] md:h-[95vh] bg-black px-2 relative hover:bg-gray-900 ease-in-out duration-200" onClick={handleBack}/>
        <Carousel current={current} />
        <MdArrowForwardIos className="text-white text-5xl h-[50vh] md:h-[95vh] bg-black px-2 relative hover:bg-gray-900 ease-in-out duration-200" onClick={handleNext}/>
    </div>
  )
}

export default SellingProcess;