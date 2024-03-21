import React from 'react';
import { LottieOne } from './LottieOne';
import { LottieTwo } from './LottieTwo';
import "./home.css";

export const HomeContent = () => {
    return (
        <section className="home-content">
            <div className="animations">
                <div className="ani-one"><LottieOne /></div>
                <div className="ani-two"><LottieTwo /> </div>
            </div>
        </section>
    );
}