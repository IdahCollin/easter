import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import eggcolorani from "../assets/eggcolorani.json";
import "./lottieone.css"

export const LottieOne = () => {
    const lottieRef = useRef();
    const waveRef = useRef();

    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlay = () => {
        setIsPlaying(true);
        lottieRef.current.play();
        startWaveAnimation();
    };

    const handleStop = () => {
        setIsPlaying(false);
        lottieRef.current.stop();
        stopWaveAnimation();
    };

    const startWaveAnimation = () => {
        waveRef.current.beginElement();
    };

    const stopWaveAnimation = () => {
        waveRef.current.endElement();
    };

    return (
        <div className="lottie-container">
            <Lottie
                lottieRef={lottieRef}
                animationData={eggcolorani}
                style={{ height: 500 }}
                loop={true}
                autoplay={true}
            />
            <div className="lottie-container">
                <svg viewBox="0 0 100 20" className="liquid-svg">
                    <defs>
                        <linearGradient id="gradient">
                            <stop color="#000" />
                        </linearGradient>
                        <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
                            <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                                <animateTransform
                                    attributeName="transform"
                                    begin="0s"
                                    dur="1.5s"
                                    type="translate"
                                    from="0,0"
                                    to="40,0"
                                    repeatCount="indefinite"
                                    ref={waveRef} />
                            </path>
                        </pattern>
                    </defs>
                    <text textAnchor="middle" x="50" y="15" fontSize="17" fill="white" fillOpacity="0.2">Happy Easter!</text>
                    <text textAnchor="middle" x="50" y="15" fontSize="17" fill="url(#wave)" fillOpacity="1">Happy Easter!</text>
                </svg>
            </div>
            <div className="text-buttons">
                Please, no bouncing eggs or crazy text!
                <button className="play-button" onClick={isPlaying ? handleStop : handlePlay}>{isPlaying ? "Stop" : "Start"}</button>
            </div>
        </div>
    );
};