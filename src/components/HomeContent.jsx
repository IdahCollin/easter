import React from 'react';
import { LottieOne } from './LottieOne';
import { LottieTwo } from './LottieTwo';
import { LottieThree } from './LottieThree';
import "./home.css";

export const HomeContent = () => {
    return (
        <section className="home-content">
            <div className="animations">
                <div className="ani-one"><LottieOne /></div>
                <div className="ani-two"><LottieTwo /> </div><div className="ani-three"><LottieThree /></div>
            </div>
        </section>
    );
}