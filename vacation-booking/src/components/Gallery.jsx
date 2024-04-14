import React from "react";

const Gallery = () => {
    return(
        <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className="w-full h-full object-cover" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/322273797.jpg?k=42a302265f86d22f94f4487a488bf0ef315509a27df114b4085e7cf02c5f945a&o=&hp=1" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://www.travelandleisure.com/thmb/hHC2NXe5INeEB4mUkzsVPerAamU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Turtle-Bay-FAMILYBEACHRESORT0223-dd9bc741f7084665a284907b69be0331.jpg" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://two.travel/wp-content/uploads/2022/03/sunsets_tulum_blogpost_hero_14.jpg" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://www.oh-split.com/wp-content/uploads/2018/05/zrce.jpg" alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover" src="https://aquasportboat.com/wp-content/uploads/2023/07/2200-CC.jpg" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Gallery