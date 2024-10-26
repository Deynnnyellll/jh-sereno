import { features } from "../constants/constants"
import { useInView } from "react-intersection-observer";

function MarketingPlan() { 
    const [ref, inView] = useInView({threshold: 0.1});
  return (
    <div className="mt-8 md:mt-40 w-full h-auto py-24 text-black flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl text-center mb-16"> Comprehensive Marketing Plan </h1>
        <img src="https://s.hdnux.com/photos/01/41/71/52/25664157/3/ratio3x2_1920.jpg" className="w-[85%] md:w-[95%] h-[800px] object-cover" alt="" />
        <div className={`flex items-center justify-center flex-wrap w-full gap-14 md:gap-6 mx-auto transition duration-300 ease-in translate-y-24 ${inView && 'translate-y-20 md:translate-y-[-60%]'}`} ref={ref} >
            {
                features.map((item, index) => (
                    <div key={index} className="bg-slate-100 flex flex-col items-center justify-center w-[250px] md:w-[330px] h-[350px] md:h-[450px] shadow-xl outline outline-1 outline-gray-200 rounded-lg px-10 hover:scale-[103%] hover:outline hover:outline-slate-400 duration-200 ease-in-out">
                        <img src={item.image} alt={`marketing${index}`} className="w-[60%] mix-blend-multiply"/>
                        <h1 className="text-3xl mb-8"> {item.title} </h1>
                        <p className="text-center text-md font-karla"> {item.detail} </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MarketingPlan;