import { useEffect, useRef } from "react";
import "./styles/Certifications.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "100-Hour Web Development Course",
    issuer: "Online Certification",
    year: "2024",
    icon: "💻",
  },
  {
    title: "National Level Hackathon",
    issuer: "Participant",
    year: "2024",
    icon: "🏆",
  },
  {
    title: "Summer Internship — IIT Delhi",
    issuer: "Indian Institute of Technology Delhi",
    year: "2024",
    icon: "🎓",
  },
  {
    title: "B.Tech in Production Engineering",
    issuer: "SGGS IE&T, Nanded",
    year: "2024 – Present",
    icon: "🏛️",
  },
];

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".cert-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="cert-section section-container" ref={containerRef}>
      <h2>
        Certifications <span>&</span>
        <br /> Achievements
      </h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-info">
              <h4>{cert.title}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
            <span className="cert-year">{cert.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
