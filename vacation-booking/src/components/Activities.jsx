import React from "react";

const Activities = () => {
    return(
        <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[36%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">Resorts</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://wise.travel/wp-content/uploads/2021/10/Hero_SonevaJani1BRWaterReserve_bySandroBruecklmeier.jpg" alt="/"/> 
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[60%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">Cruises</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://cruises.priceline.com/images_unique/promo/tiles/cruiselines/rci/600x300/rci_01_600x300.jpg" alt="/"/> 
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">Excursions</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://www.dolphinscuba.com.au/wp-content/uploads/2018/03/Dolphin-Scuba-Diving-Gear-1024x683.jpeg" alt="/"/> 
            </div>
        </div>
    )
}

export default Activities;