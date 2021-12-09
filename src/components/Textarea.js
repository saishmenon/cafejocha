import React from 'react'

function Textarea(props) {
    return (
        <div class="relative mb-4 pl-6 pr-6">
            <label for={props.name} class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name={props.name} class="textarea" placeholder={props.name + " here..."}/>
        </div>
    )
}

export default Textarea;