import React, { useState, useRef, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navigation.css";
import "tachyons";

const Navigation = () => {

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [toogleMenu, setToggleMenu] = useState(true);

  const handleToggle = () => {
      setToggleMenu(!toogleMenu);
  }

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (prevScrollY.current < currentScrollY && goingUp) {
              setGoingUp(false);
          }
          if (prevScrollY.current > currentScrollY && !goingUp) {
              setGoingUp(true);
          }

          prevScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const scrollToTop = () => {
      scroll.scrollToTop();
  };

  return (
    <header className="bg-black-50 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f5 fw6 ttu tracked">
        <Link className="link dim white dib br1 mr3 grow" 
        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
        >
          Home
        </Link>
        <Link className="link dim white dib br1 mr3 grow" 
        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
        >
         About
        </Link>
        <Link
          className="link dim white dib br1 mr3 grow"
          activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
        >
          Education
        </Link>
        <Link className="link dim white dib br1 mr3 grow" 
        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
        >
          Skills
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
