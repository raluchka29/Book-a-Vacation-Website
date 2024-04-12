import React from "react";

const Hero = () => {
    return(
        <div className="w-full h-[90vh]">
            <img 
            src="https://m.media-amazon.com/images/I/91Ia769+uxL.jpg" 
            alt="/"
            className="w-full h-full object-cover"/>
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
                    <h2 className="text-4xl py-4 italic">With RelaxRover</h2>
                    <p> Whether you're seeking serene beaches, historic landmarks, or bustling cityscapes, we've got the perfect getaway for you. Our curated selection of destinations and accommodations ensures that every journey is tailored to your preferences, making your vacation planning stress-free and enjoyable. Explore our diverse range of options, from luxurious resorts to cozy bed and breakfasts, and embark on your dream vacation with confidence. With RelaxRover, your next adventure is just a click away.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero