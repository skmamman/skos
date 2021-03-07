import React from 'react';
import 'tachyons';

const About = () => {
    return (
        <section className="about fl">
            <div className="contentAb w-60">
                <h1 className="heading">About Me</h1>
                <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <h2 className="f5 f4-m f3-l lh-copy measure mt0">“If I had nine hours to chop down a tree, I’d spend the 1st six sharpening my axe"
                <cite className="f6 ttu tracked fs-normal">―– Abraham Lincoln.</cite></h2>
                </blockquote>
                <h3 className="f5 f4-m f3-l lh-copy lh-copy-m">Learning is my passion. I am a bit crazy about IT stuff. It's interesting for me to utilize the time to learn something new every day. I love to grow my technical skills in the IT ﬁeld. Now my goal is to learn web development to become a full-stack web developer which is currently I am doing on my own. But It will be beneﬁcial for me to achieve my goal if I get a chance to work on different projects within a team to grow my skills as well as utilize my skills to help the team.</h3>
            </div>
            <div className="contentCo w-40">
                <h1 className="heading">Contact Me</h1>
                <h2 className="f5 f4-m f3-l lh-copy lh-title-m">Sandeep Kumar Mamman</h2>
                <h2 className="f5 f4-m f3-l lh-copy lh-title-m">Kalupes iela 19A - 16</h2>
                <h2 className="f5 f4-m f3-l lh-copy lh-title-m">Riga, Latvia, LV-1003,</h2>
                <h2 className="f5 f4-m f3-l lh-copy lh-title-m">+371 25630031</h2>
                <h2 className="f5 f4-m f3-l lh-copy lh-title-m">skmamman@outmail.com</h2>
                <div className="resume-button" data-aos="fade-up">
                <a className="f6 link grow dib v-mid br1 ph3 pv2 mb2 dib white bg-purple" 
                href="https://drive.google.com/file/d/1mX5lxoWOQzYNbj8Hm2HuTiuq3KoM_ofv/view?usp=sharing" target="blank">
                Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default About;
