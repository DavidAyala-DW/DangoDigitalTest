import { useState } from 'react'
import logo from "../images/Layer2.png";
function LayoutText({changeColor}) {

    const [textButton, setTextButton] =  useState("Call to action");

    return (

        <div className = "max-w-xl lg:max-w-sm xl:max-w-xl  mx-auto lg:ml-auto lg:mr-0  px-4 pb-8  lg:p-8 flex flex-col justify-center mt-96 lg:mt-0">

            <img className="static visible w-20 h-20 mx-auto  lg:fixed lg:hidden -mt-5 mb-5" src={logo}   alt="" />

            <h1 className = "font-neue text-peacock  text-6xl lg:text-5xl xl:text-6xl text-center" >Long term habits, start with small steps</h1>
            <p className = "font-neue text-peacock text-xl mt-10 text-center" >We are with you all the way. We are driven by the science of habits, and we are your companion on your journey to ongoing health. It’s health on your terms, and we support you all the way. Our optional free nutritionist is there for every customer of ours, daily packs, and our new App to track your progress.</p>

            <button 
                className = "bg-peacock transition-color duration-100 ease-in hover:bg-hoverButton rounded-3xl px-11 py-2 text-lg text-white hover:text-peacock  max-w-max mx-auto mt-10"
                onMouseOver = { () => {setTextButton("Shop now")} }
                onMouseLeave = { () => {setTextButton("Call to action")}}
                onClick = { changeColor }
                >
                    {textButton}

            </button>

        </div>

    )

}

export default LayoutText
