import React from 'react';
import WelcomeForm from './WelcomeForm.js';


export default class Welcome extends React.Component {
    render() {
        return (
            <div>

                Welcome to LotusLessons. Please enter your name below to start your quiz!
                <WelcomeForm />
            </div>
        )
    }
}