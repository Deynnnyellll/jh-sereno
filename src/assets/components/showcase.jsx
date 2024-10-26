import { realEstate } from "../constants/constants";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Benefits from "./benefits";
import { useState } from "react";

function Showcase() {
    const [current, setCurrent] = useState(0);

    function handleNext() {
        if(current < 3) {
            setCurrent(prevState => prevState + 1);
        }
    }
    
    function handleBack() {
        if(current >= 0) {
            setCurrent(prevState => prevState - 1);
        }
    }

  return (
    <div className="w-full p-8 md:p-24 bg-black text-white">
        {
            realEstate.map((item, index) => (
                <div key={index} className={`flex items-center flex-col md:flex-row justify-center ${index % 2 === 0 && 'md:flex-row-reverse'} gap-24 md:gap-36 mt-20`}>
                    <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[40%]">
                        <h1 className="text-2xl md:text-4xl text-center font-semibold"> {item.title} </h1>
                        <p className="text-md md:text-xl font-karla text-justify"> {item.text} </p>
                        { index === 2 && <h2 className="font-karla font-bold text-2xl mb-[-5%]"> Benefits </h2> }
                        { index === 2 && <div className="flex items-center w-full gap-4">
                            <div className="ml-[-5%] md:ml-0 p-2 rounded-full bg-white text-black hover:bg-black hover:text-white duration-200 ease-in-out">
                                <MdArrowBackIos onClick={handleBack}/>
                            </div>

                            <Benefits current={current}/>

                            <div className="p-2 rounded-full bg-white text-black hover:bg-black hover:text-white duration-200 ease-in-out">
                                <MdArrowForwardIos onClick={handleNext}/>
                            </div>
                        </div> }
                        <p className="text-md md:text-xl font-karla text-justify md:mt-4"> We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter!  </p>
                    </div>
                    <img src={item.image} alt={item.text} className="w-[80%] md:w-[40%]"/>
                </div>
            ))
        }
    </div>
  )
}

export default Showcase;