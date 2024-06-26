import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineSun } from "react-icons/hi";

const TopBar = () =>{
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex item-center">
                <HiOutlineSun size={30} className="text-[var(--primary-dark)] mr-2" />
                <h1 className="text-xl font-bold text-gray-700">RelaxRover</h1>
            </div>   
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className="text-sm text-gray-700">9:00 - 18:00</p>
                </div>
                <div className="hidden md:flex items-center px-6"> 
                    <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
                    <p className="text-sm text-gray-700">+40 762 123 456</p>
                </div>
                <button>Get a Free Quote</button>
            </div>         
        </div>
    )
}

export default TopBar