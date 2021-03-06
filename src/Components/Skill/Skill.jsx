import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <section className="skill">
            <h1 className="heading">Technical Skills</h1>
            <div className="wrap" data-aos="fade-up">
                <div className="cube">
                    <img style={{ width: '80%', height: '70%' }} src="/images/js.png" alt="java-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/node3.png" alt="node-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/css.png" alt="python-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/react.png" alt="react-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/post.png" alt="docker-image" />
                    <img style={{ width: '80%', height: '70%' }} src="/images/redux.png" alt="mongo-image" />
                </div>
            </div>

        </section>
    )
}

export default Skill;
