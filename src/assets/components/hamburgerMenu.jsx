import { TbLetterX } from "react-icons/tb";

function HamburgerMenu({isShow, toggle, nav}) {
  return (
    <ul className={`bg-white text-black absolute h-screen top-0 ${isShow ? 'right-0' : 'right-[-60%] md:right-[-28%]'} w-[60%] md:w-[28%] p-10 flex flex-col items-center justify-center gap-4 duration-300 ease-in-out`}>
      <TbLetterX className={`absolute top-14 text-3xl ${isShow ? 'right-8' : 'right-[-8%]'} duration-300 ease-in-out`} onClick={toggle}/>
        {
            nav.map((item, index) => (
                <li key={index} className="text-2xl w-[90%]">
                  <h1 className="text-center mb-2"> {item} </h1>
                  <div className="w-full h-[1px] bg-gray-700"></div>
                </li>
                
            ))
        }
    </ul>
  )
}

export default HamburgerMenu;