import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact(){
    return(
        <div className="h-screen lg:flex">
            <div className="flex flex-col">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center p-6">
                    Fill the form. It’s easy.
                </h1>
                <ContactForm />
            </div>

            {/* This is  box for the note*/}
            <div className="flex flex-col justify-center items-center p-6 md:p-1 lg:p-32">
                <h1 className="text-4xl font-bold text-center mb-6">
                    Let’s talk about everything.
                </h1>
                <p className="text-center mb-6 md:pl-24 md:pr-24">
                    Be it about your life or your love for coffe, recommendations, starwatching, the great cuisines, or even your pet.
                </p>
                <a href="#" className="mb-6 text-yellow-700">Read More</a>
            </div>

        </div> 
    );
}