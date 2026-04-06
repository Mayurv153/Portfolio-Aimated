import { useEffect, useRef } from "react";
import "./styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const title = sectionRef.current.querySelector(".title");
    const para = sectionRef.current.querySelector(".para");

    gsap.fromTo(
      title,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      para,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a 3rd year Engineering student at SGGS Institute of Technology, Nanded,
          and also a student of IIT Madras BS in Data Science. I'm a highly creative
          person with a passion for building animated website designs and crafting
          seamless full-stack experiences. I love turning ideas into interactive,
          visually stunning digital products that leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default About;
