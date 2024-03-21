import "./lottieone.css"
import { useRef } from "react"
import Lottie from "lottie-react"
import eggcolorani from "../assets/eggcolorani.json"

export const LottieOne = () => {

    const options = {
        animationData: eggcolorani,
        style: {
            height: 500
        }
        ,
        loop: true,
        autoplay: true,
        lottieRef: useRef()
        //,
        // To show console message for every loop
        //     loopComplete: () => console.log("I looped one time!")
        // 
    }

    const handlePlay = () => {
        if (options.lottieRef.current) {
            options.lottieRef.current.play()
        }
    }

    const handleStop = () => {
        if (options.lottieRef.current) {
            options.lottieRef.current.stop()
        }
    }

    return (
        <>
            <Lottie
                lottieRef={options.lottieRef}
                animationData={options.animationData}
                style={options.style}
                loop={options.loop}
                autoplay={options.autoplay}
            //To show console message for every loop onLoopComplete={options.loopComplete}
            />
            <div>Please, no bouncing eggs!<br></br>
                <button onClick={handlePlay}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </>
    )
}





