import { useEffect, useRef } from "react";
import "./styles/GitHubStats.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitHubStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll(".gh-stat-card");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="gh-section section-container" ref={sectionRef}>
      <h2>
        GitHub <span>Activity</span>
      </h2>
      <div className="gh-stats-grid">
        <a
          href="https://github.com/Mayurv153"
          target="_blank"
          className="gh-stat-card gh-profile-card"
        >
          <div className="gh-avatar">
            <img
              src="https://github.com/Mayurv153.png"
              alt="Mayur Vaidya"
              loading="lazy"
            />
          </div>
          <div className="gh-profile-info">
            <h4>Mayurv153</h4>
            <p>View Profile →</p>
          </div>
        </a>
        <div className="gh-stat-card">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Mayurv153&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&text_color=eae5ec&icon_color=c2a4ff&title_color=c2a4ff"
            alt="GitHub Stats"
            loading="lazy"
            className="gh-stat-img"
          />
        </div>
        <div className="gh-stat-card">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mayurv153&layout=compact&theme=radical&hide_border=true&bg_color=00000000&text_color=eae5ec&title_color=c2a4ff"
            alt="Top Languages"
            loading="lazy"
            className="gh-stat-img"
          />
        </div>
        <div className="gh-stat-card gh-streak-card">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Mayurv153&theme=radical&hide_border=true&background=00000000&ring=c2a4ff&fire=c2a4ff&currStreakLabel=c2a4ff&sideLabels=eae5ec&dates=888888"
            alt="GitHub Streak"
            loading="lazy"
            className="gh-stat-img"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
