import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className='about-container'>
            <h1>This is About page</h1>
            <h2>Reading is very, very good for you. Research shows that regular reading:</h2>
            <ul className='list-items'>
                <ul>improves brain connectivity</ul>
                <ul>increases your vocabulary and comprehension</ul>
                <ul>empowers you to empathize with other people</ul>
                <ul>aids in sleep readiness</ul>
                <ul>reduces stress</ul>
                <ul>lowers blood pressure and heart rate</ul>
                <ul>fights depression symptoms</ul>
                <ul>prevents cognitive decline as you age</ul>
                <ul>contributes to a longer life</ul>
            </ul>
        </div>
    );
};

export default About;