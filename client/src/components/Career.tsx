import { useEffect, useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const boxes = sectionRef.current.querySelectorAll(".career-info-box");
    const heading = sectionRef.current.querySelector("h2");

    gsap.fromTo(
      heading,
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
      boxes,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div className="career-section section-container" ref={sectionRef}>
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education (SSC)</h4>
                <h5>Shri Shivaji High School, Morshi</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary schooling from Shri Shivaji High School,
              Morshi, building a strong academic foundation and discovering
              an early interest in technology and problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (HSC) - 11th & 12th</h4>
                <h5>Bhartiya Mahavidyalaya, Morshi</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursued higher secondary education with a focus on Science,
              developing analytical thinking and a deeper passion for
              computer science and engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Internship — IIT Delhi</h4>
                <h5>Indian Institute of Technology Delhi (Remote)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a Banking System using Python, Tkinter & SQLite. Built
              core features like account creation, deposit, withdrawal and
              transaction tracking with an interactive GUI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Production Engineering</h4>
                <h5>SGGS Institute of Engineering & Technology, Nanded</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech at SGGS IE&T, Nanded with a CGPA of 7.0 (expected 2028).
              Actively building full-stack projects, animated websites, AI agents, and
              exploring modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
