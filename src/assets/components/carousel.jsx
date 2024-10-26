import { decorGuidance } from "../constants/constants";

function Carousel({ current }) {
    return (
    <div className="flex h-[50vh] md:h-[95vh] w-[75vw] md:w-[85vw] overflow-hidden outline">
        <div className={`relative left-0 w-full mx-auto grid grid-cols-2 grid-rows-2 flex-shrink-0 transition duration-300 ease-in-out`} style={{transform: `translateX(-${current * 100}%)`}}>
            {/* first slide */}
            <div className="col-span-1 row-span-1 bg-black flex items-center justify-center">
                <h1 className="text-2xl md:text-5xl text-center"> Decor Guidance </h1> 
            </div>

            <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025" alt="" className="w-full h-full md:h-auto"/>

            <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023" alt="" className="w-full h-full md:h-auto"/>

            <div className="col-span-1 row-span-1 bg-[#525252] flex flex-col justify-center items-center gap-4 md:gap-8 outline outline-1 outline-black">
                <h1 className="text-md md:text-5xl text-center font-semibold"> My Staging Expertise </h1>
                <ul className="flex flex-col list-disc gap-2 text-[6pt] md:text-xl font-karla">
                    <li> Unclutter and organize your home </li>
                    <li> Neatly arrange drawers and cabinets </li>
                    <li> Keep pets outdoors or off the premises </li>
                    <li> Play soft music </li>
                </ul>
            </div>
        </div>
        {
            decorGuidance.map((item, index) => (
                <div key={index} className={`relative left-0 w-full h-full flex-shrink-0 transition duration-500 ease-in-out`} style={{transform: `translateX(-${current * 100}%)`}}>
                    <div className="w-[43%] bg-opacity-80 h-[12%] shadow-container bg-[#525252] flex items-center rounded-r-full justify-start px-4 md:px-10 relative top-[77%] z-10">
                        <h1 className="text-xs md:text-4xl font-karla text-white text-center"> {item.text} </h1>
                    </div>
                    <img 
                        src={item.image}
                        alt="" className="relative z-0 w-full mt-[-14%] md:mt-[-10%] h-full md:h-auto"/>
                </div>
            ))
        }
    </div>
  )
}

export default Carousel;