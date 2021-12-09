import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

export default function ContactForm() {
    return (
        <div>
            <Input type="text" name="First Name" labelName="First Name" />
            <Input type="text" name="Last Name" labelName="Last Name"/>
            <Input type="email" name="Email" labelName="Email"/>
            <Textarea name="Message" />
            <Button text="Send message"/>
        </div>
    );
}
