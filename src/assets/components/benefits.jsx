import { benefits } from "../constants/constants"

function Benefits({ current }) {
  return (
    <div className="w-[90%]">
        <div className="flex flex-col items-center justify-center w-full overflow-x-hidden p-4">
            <ul className="flex items-center justify-start ml-[-46%] w-[60%] h-[200px] md:h-[300px] gap-4 transition ease-in-out duration-500" style={{transform:`translateX(-${current * 80}%)`}}>
                {
                    benefits.map((item, index) => (
                        <li key={index} className="bg-white rounded-lg shadow-inner shadow-slate-900 outline-white h-[200px] md:h-[300px] flex justify-center items-center p-6 w-full text-center font-karla text-md md:text-lg flex-shrink-0"> 
                            <h1 className="text-black font-semibold text-justify"> {item} </h1>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Benefits;