import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education fl">
            <div className="content fl">
                <h1 className="heading">Education</h1>
                <div className="education-details fl w-50">
                    <h2 className="heading">Master of Business Administration</h2>
                    <h3>
                        <ul className="tj">
                            <li>19/02/2019 – 01/02/2021</li>
                            <li>ISMA University, Riga, Latvia.</li>
                            <li>Study emphases: Enterprise Management.</li>
                            <li>Master thesis: Strategic decision to overcome the pandemic crisis for SIA "Premier Restaurants Latvia.</li>
                            <li>Final Grades:- 7.78 (Latvian Education System).</li>
                            <li><a href="https://www.isma.lv/" target="blank">www.isma.lv</a></li>
                        </ul>
                    </h3>
                </div>
                <div className="education-details fl w-50">
                    <h2 className="heading ">Master in Computer Systems</h2>
                    <h3>
                        <ul className="tj">
                            <li>29/09/2016 – 29/06/2018</li>
                            <li>Rezekne Academy of Technologies, Rezekne, Latvia.</li>
                            <li>Study emphases: Software development.</li>
                            <li>Semester abroad at Rhine-Waal University of Applied Science, Kamplint-Fort, Germany.</li>
                            <li>Master thesis: Develop a Traditional 12 Sticks Game.</li>
                            <li>Final Grades:- 8.47 (Latvian Education System).</li>
                            <li><a href="https://www.rta.lv/" target="blank">www.rta.lv</a></li>
                        </ul>
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Education;
