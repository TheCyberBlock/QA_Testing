import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this epic Games!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg"
                            text="An action game is a video game genre that emphasizes physical challenges, 
                            including hand–eye coordination and reaction-time"
                            label="Action"
                            path="games" />
                        <CardItem src="images/img-2.jpg"
                            text="Fantasy sport is a type of online game 
                            where participants assemble imaginary or virtual teams of real
                            players of a professional sport."
                            label="Fantasy"
                            path="games" />


                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img-1.jpg"
                            text="A role-playing game is a game in which players assume the roles of characters in a fictional setting"
                            label="FPS"
                            path="games" />
                        <CardItem src="images/img-3.jpg"
                            text="A role-playing game is a game in which players assume the roles of characters in a fictional setting. "
                            label="RPG"
                            path="games" />
                        <CardItem src="images/img-4.jpg"
                            text="A role-playing game is a game in which players assume the roles of characters in a fictional setting."
                            label="RPG"
                            path="games" />



                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
