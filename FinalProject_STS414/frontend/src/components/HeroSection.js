import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>

            <video src='/videos/video-222.mp4' autoPlay loop muted></video>

            <h3>THE ADVENTURE WITH THE GAMES BEGIN</h3>
            <p>
                Where your mission starts!
            </p>
            <div className="hero-btns">
                <a href="/games">
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        GAMES
                    </Button>
                </a>
                <a href="/softwares">
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        SOFTWARES
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
