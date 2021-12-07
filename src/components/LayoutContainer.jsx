import { useState } from "react"
import LayoutImage from "./LayoutImage"
import LayoutText from "./LayoutText"

function LayoutContainer({colors}) {

    const [color, setColor] = useState("bg-primary");

    function changeColor() {

        const availableColours = colors.filter(child => child!=color);
        const indexRandom =  Math.floor(Math.random() * availableColours.length);
        setColor(availableColours[indexRandom]);
    }

    return (

        <main className =  { color + " lg:h-full lg:overflow-x-hidden w-full rounded-none lg:rounded-3xl flex flex-col lg:flex-row"}>

            <LayoutImage/>
            <LayoutText
                changeColor = {changeColor}
            />

        </main>

    )

}

export default LayoutContainer
