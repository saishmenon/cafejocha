import React from 'react';

function Button(props) {
    return (
        <div className="flex justify-center lg:justify-start mb-4 pl-6 pr-6">
            <button className="bg-yellow-600 text-white p-4 text-base rounded-full hover:bg-yellow-400">{props.text}</button>
        </div>
    )
}

export default Button
