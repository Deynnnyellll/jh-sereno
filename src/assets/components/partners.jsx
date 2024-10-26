import { partners } from "../constants/constants";
import { useInView } from "react-intersection-observer";

function Partners() {
    const [ref, inView] = useInView({threshold: 0.5});
  return (
    <div className='mt-24 mb-0 md:mb-24 w-full flex flex-col'>
        <div className='mt-24 w-full py-24 px-8 md:p-24 bg-black text-white flex flex-col md:flex-row items-center gap-24' ref={ref}>
            <div className="flex flex-col items-center justify-center w-[100%]">
                <h1 className='text-5xl font-bold text-center'> Our Partners </h1>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/og3ockhby4gghmrdfseo/edited-p-19" alt="" className="w-[75%] mt-12 mb-8 md:hidden"/>  
                <h2 className='font-karla text-lg mt-4 font-thin text-center'> Leading Real Estate Companies of The World® & Luxury Portfolio International </h2>
                <div className={`w-[40%] flex items-center justify-center mt-8 gap-10 mb-10 ${inView ? "translate-x-0 opacity-100" : "md:translate-x-[-150%] md:opacity-0"} duration-700 ease-in-out`}>
                    {
                        partners.map((item, index) => (
                            index !== 1 &&
                            <div key={index} className="bg-white p-12 rounded-md shadow-lg shadow-slate-800 hover:translate-y-[-2%] duration-300 ease-in-out flex-shrink-0"> 
                                <img src={item} alt={item} className="w-[50px] md:w-[100px] h-[50px] md:h-[100px]"/>
                            </div>
                        ))
                    }
                </div>
                <p className="font-karla w-full text-center"> JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries. </p> 
                <img src={partners[2]} alt="" className={`mt-14 ${inView ? "translate-x-0 opacity-100" : "md:translate-x-[-150%] md:opacity-0"} duration-700 ease-in-out`}/>
                <p className="font-karla mt-8 text-center"> Who’s Who in Luxury Real Estate is a global collection of luxury real estate broker </p>
            </div>
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/og3ockhby4gghmrdfseo/edited-p-19" alt="" className="hidden md:block w-[55%]"/>  
        </div>

        <div className="w-full px-10 md:px-28 gap-10 flex flex-col md:flex-row items-center justify-center text-black font-karla mt-24 mb-24">
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ebvif7iqcx0lcjlvwyuz/edited-page-20" alt="" className="w-[70%] md:w-[50%]"/>
            <div className="flex flex-col justify-center gap-10">
                <p className="text-justify"> Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with: </p>
                <div className="w-full flex items-center justify-center gap-10 mt-4 md:mt-10">
                    {
                        partners.map((item, index) => (
                            <img key={index} src={item} alt={item} className="w-[50px] md:w-[150px] h-[50px] md:h-[100px]"/>
                        ))
                    }
                </div>
                <p className="mt-4 md:mt-10"> We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing.  </p>
            </div>
            <p></p>
        </div>
    </div>
  )
}

export default Partners;