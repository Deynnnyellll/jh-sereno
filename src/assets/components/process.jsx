import { useState } from "react";

function Process() {
    const sell = ["Initial Consultation & Planning", "Devise & Execute Marketing Plan", "Review Offers & Reach Agreement with Buyer", "Complete Transaction Process", "After - Sale Service"];
    const buy = ["Initial Consultation & Planning", "Search for a Home & Get Pre-Approved", "Submit an Offer", "Complete Settlement Process"];

    const [sellingProcess, setSellingProcess] = useState();
    const [buyingProcess, setBuyingProcess] = useState();
  return (
    <div className="md:mt-36 w-full md:h-[100vh] p-4 flex flex-col md:flex-row items-center justify-center gap-4 mb-10 md:mb-28">
        <div className="w-[70%] md:w-[45%] h-full text-black py-10">
            <h1 className="text-center text-4xl mb-8"> The Selling Process </h1>
            <div className="flex items-center justify-center gap-44">
                <ul className="flex flex-col gap-8">
                    {
                        sell.map((item, index) => (
                            <li key={index} 
                                className={`text-2xl rounded-full ${index === sellingProcess ? 'bg-black text-white scale-105' : 'text-black'} transition ease-in-out duration-300 py-4 px-10 w-full flex items-center justify-start gap-6 outline outline-1 outline-black`}
                                onMouseEnter={() => setSellingProcess(index)} onMouseLeave={() => setSellingProcess()}
                            >
                                <p className="text-3xl mb-2 font-bold"> {index+1} </p>
                                <p className="font-karla"> {item} </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="h-[3px] md:h-[90%] w-[85%] md:w-[4px] rounded-full bg-black"> </div>
        <div className="w-[70%] md:w-[45%] h-full text-black py-10">
            <h1 className="text-center text-4xl mb-8"> The Buying Process </h1>
            <div className="flex items-center justify-center gap-44">
                <ul className="flex flex-col gap-8">
                    {
                        buy.map((item, index) => (
                            <li key={index} 
                                className={`text-2xl rounded-full ${index === buyingProcess ? 'bg-black text-white scale-105' : 'text-black'} transition ease-in-out duration-300 py-4 px-10 w-full flex items-center justify-start gap-6 outline outline-1 outline-black`}
                                onMouseEnter={() => setBuyingProcess(index)} onMouseLeave={() => setBuyingProcess()}
                            >
                                <p className="text-3xl mb-2 font-bold"> {index+1} </p>
                                <p className="font-karla"> {item} </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Process