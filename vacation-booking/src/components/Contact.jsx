import React from "react";

const Contact = () => {
    return(
        <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <h2 className="text-center text-gray-700">Send us a message</h2>
            <p className="text-center text-gray-700 py-2">We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img 
                className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
                src="https://iso.500px.com/wp-content/uploads/2014/08/20481.jpg" alt="/" />
                <form action="/">
                    <div className="grid grid-cols-2 ">
                        <input className="border m-2 p-2" type="text" placeholder="First Name" />
                        <input className="border m-2 p-2" type="text" placeholder="Last Name" />
                        <input className="border m-2 p-2" type="email" placeholder="E-mail" />
                        <input className="border m-2 p-2" type="tell" placeholder="Phone Number" />
                        <input className="border col-span-2 p-2 m-2" type="text" placeholder="Adress" />
                        <textarea className="border col-span-2 m-2 p-2" cols="30" rows="10" placeholder="Write your message here..."></textarea>
                        <button className="col-span-2 m-s">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;