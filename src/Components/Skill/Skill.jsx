import React from 'react';
import js from './images/js.png'
import css from './images/css.png'
import react from './images/react.png'
import post from './images/post.png'
import redux from './images/redux.png'
import node from './images/node3.png'
import './Skill.css';

const Skill = () => {
    return (
        <section className="skill">
            <h1 className="heading">Technical Skills</h1>
            <div className="wrap" data-aos="fade-up">
                <div className="cube">
                    <img style={{ width: '80%', height: '70%' }} src={js} alt="javascript-image" />
                    <img style={{ width: '80%', height: '70%' }} src={node} alt="node-image" />
                    <img style={{ width: '80%', height: '70%' }} src={css} alt="css-image" />
                    <img style={{ width: '80%', height: '70%' }} src={react} alt="react-image" />
                    <img style={{ width: '80%', height: '70%' }} src={post} alt="postgresql-image" />
                    <img style={{ width: '80%', height: '70%' }} src={redux} alt="redux-image" />
                </div>
            </div>

        </section>
    )
}

export default Skill;
