import React from 'react'

function Input(props) {
    return (
        <div class="relative mb-4 pl-6 pr-6">
            <label for={props.name} class="leading-7 text-sm text-gray-600">{props.labelName}</label>
            <input type={props.type} name={props.name} class="textfield" placeholder={props.name}/>
        </div>
    )
}

export default Input;
