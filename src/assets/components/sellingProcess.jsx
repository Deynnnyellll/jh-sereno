import { useEffect, useState } from "react";
import Carousel from "./carousel";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useInView } from "react-intersection-observer";

function SellingProcess() {
    const [current, setCurrent] = useState(0);
    const [ref, inView] = useInView({threshold: 0.1})
    const [click, setClick] = useState(false);

    function handleNext() {
        setClick(true)
        if(current < 4) {
            setCurrent(prevState => prevState + 1)
        }
    }

    function handleBack() {
        setClick(true)
        if(current > 0) {
            setCurrent(prevState => prevState - 1)
        }
    }

    function handleAutomatic() {
        if(click === false) {
            setTimeout(() => {
                if(current < 4) {
                    setCurrent(prevState => prevState + 1);
                }
                else {
                    setCurrent(0);
                }
            }, 2000)
        }
    }

    useEffect(() => {
        if(inView) {
            handleAutomatic();
        }
        else {
            setClick(false)
            setCurrent(0);
        }

    }, )

  return (
    <div className="w-full flex items-center justify-center mt-24 mb-5 ml-[-1%] md:ml-0" ref={ref}>
        <MdArrowBackIos className="text-white text-5xl h-[50vh] md:h-[95vh] bg-black px-2 relative hover:bg-gray-900 ease-in-out duration-200" onClick={handleBack}/>
        <Carousel current={current} />
        <MdArrowForwardIos className="text-white text-5xl h-[50vh] md:h-[95vh] bg-black px-2 relative hover:bg-gray-900 ease-in-out duration-200" onClick={handleNext}/>
    </div>
  )
}

export default SellingProcess;