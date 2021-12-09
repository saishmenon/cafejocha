import React from 'react';
import coffee from '../images/coffee.svg';
import coffees from '../images/coffees.svg';
import moreCoffee from '../images/more_coffee.svg';

export default function About(){
    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center p-6 md:p-16 leading-normal">
                We make the world’s most delicious things with <span className="text-yellow-800">coffee.</span> 
            </h1>

            <div className="flex justify-center md:justify-items-center md:pl-32 md:pr-32">
                <div className="flex flex-col items-center p-2 md:mr-16">
                    <img src={coffee} alt="coffee" />
                    <p className="text-base">Coffee</p>
                </div>
                <div className="flex flex-col items-center p-2 md:mr-16">
                    <img src={coffees} alt="coffees" />
                    <p className="text-base">Coffeee</p>
                </div>
                <div className="flex flex-col items-center p-2">
                    <img src={moreCoffee} alt="More coffee" />
                    <p className="text-base">More coffee</p>
                </div>
            </div>


        </div>    
    );
}