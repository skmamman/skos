import React, { useState, useRef, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navigation.css";
import "tachyons";

const Navigation = () => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  // const [hideNav, setHideNav] = useState(false);
  const [backgroundVal, setBackgroundVal] = useState("Home");
  const [toogleMenu, setToggleMenu] = useState(true);

  function useWindowSize() {

      const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
      });

      useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
              // Set window width/height to state
              setWindowSize({
                  width: window.innerWidth,
                  height: window.innerHeight,
              });
          }

          // Add event listener
          window.addEventListener("resize", handleResize);

          // Call handler right away so state gets updated with initial window size
          handleResize();

          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
      }, []); // Empty array ensures that effect is only run on mount

      return windowSize;
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

          // prevScrollY.current = currentScrollY;
          // if (parseInt(currentScrollY) >= 220 && parseInt(currentScrollY) <= 460) {
          //     setHideNav(true)
          // } else {
          //     setHideNav(false);
          // }

          if (parseInt(currentScrollY) >= 220 && parseInt(currentScrollY) < 661) {
              setBackgroundVal("Home");
          } else if (parseInt(currentScrollY) >= 662 && parseInt(currentScrollY) < 1585) {
              setBackgroundVal("About");
          } else if (parseInt(currentScrollY) >= 1585 && parseInt(currentScrollY) < 2745) {
              setBackgroundVal("Skills");
          }

      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const scrollToTop = () => {
      scroll.scrollToTop();
  };

  const size = useWindowSize();
  return (
    <header className="bg-black-50 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f5 fw6 ttu tracked">
        <Link className="link dim white dib br1 mr3 grow" 
        activeClass="active"
                        to="display"
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
                        onClick={scrollToTop}
        >
         About
        </Link>
        {/* <Link
          className="link dim white dib br1 mr3 grow"
          activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
        >
          Projects
        </Link> */}
        <Link className="link dim white dib br1 mr3 grow" 
        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
        >
          Skills
        </Link>
        {/* <Link className="link dim white dib br1 grow" 
        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
        >
         Contact
        </Link> */}
      </nav>
    </header>
  );
};

export default Navigation;
