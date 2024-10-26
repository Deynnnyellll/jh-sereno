import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-8 mb-8 w-full p-4 md:p-16 flex flex-col md:flex-row items-start justify-center text-black">
        <div className="w-full md:w-[50%]">
            <h1 className="text-2xl md:text-3xl"> Julie Hansen Partnership </h1>
            <p className="text-md md:text-lg w-full text-justify font-karla mt-4"> An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes. </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:mt-10">
                <div className="font-karla w-full">
                    <h3 className="font-semibold text-lg mt-10"> ADDRESS </h3>
                    <p className="w-full md:w-[50%]"> 4733 Chabot Drive #100 Pleasanton, CA 94588 </p>
                </div>

                <div className="font-karla w-full">
                    <h3 className="font-semibold text-lg mt-10"> CONTACT INFORMATION </h3>
                    <p className="w-[50%]"> (925) 553-6707 luxuryhomesinwc@icloud.com </p>
                </div>
            </div>
            <p className="font-karla mt-6"> ​​​​​​​Julie Hansen-Orvis | CA DRE# 00934447 </p>

            <div className="flex items-center justify-start gap-2 mt-8 md:mt-16">
                <FaFacebookF className="bg-black text-white rounded-full text-4xl p-3"/>
                <FaLinkedinIn className="bg-black text-white rounded-full text-4xl p-3"/>
            </div>
            <h1 className="text-md md:text-xl font-karla mt-10 md:mt-14 text-center md:text-left"> Website Designed & Developed by <b><br className="block md:hidden"/> Luxury Presence </b>   </h1>
        </div>
        <div className="mt-10 w-full h-[3px] bg-black md:hidden"></div>
        <div className="w-full md:w-[50%] md:ml-28 mt-10 md:mt-0">
            <h1 className="text-2xl md:text-3xl"> Newsletter </h1>
            <p className="w-[90%] md:w-[37%] text-justify text-md md:text-lg font-karla mt-4"> Subscribe to our Newsletter for latest news and updates. Stay tuned! </p>

            <input type="text" placeholder="Email Address" className="mt-6 md:mt-10 font-karla text-md px-2"/>
            <div className="w-full md:w-[85%] h-[0.5px] bg-black"></div>
            <div className="flex items-start py-4 gap-4">
                <input type="checkbox" id="check" className="mt-1"/>
                <label htmlFor="check" className="font-karla text-xs text-justify md:w-[80%]"> By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our <u> Privacy Policy</u> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply. </label>
            </div>
            <button className="font-karla font-semibold outline outline-2 outline-black hover:bg-black hover:text-white duration-500 ease-in-out px-8 md:px-10 py-2 md:py-3 mt-1 md:mt-3 ml-12"> SUBSCRIBE </button>
            <div className="w-full flex items-center justify-center md:justify-start gap-12 mt-8">
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu" alt="" className="w-[8%]"/>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa" alt="" className="w-[8%]"/>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo" alt="" className="w-[8%]"/>
            </div>
            <h1 className="text-md md:text-xl font-karla mt-12 text-center md:text-left"> Copyright 2024 | Privacy Policy </h1>
        </div>
    </footer>
  )
}

export default Footer