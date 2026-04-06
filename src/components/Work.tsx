import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "AI Chat Assistant",
    category: "AI / Web App",
    tools: "React, Node.js, OpenAI API, Socket.io",
    image: "/images/project_chat.png",
  },
  {
    name: "Smart Resume Builder",
    category: "AI / SaaS",
    tools: "Next.js, TypeScript, GPT-4, Tailwind CSS",
    image: "/images/project_resume.png",
  },
  {
    name: "AI Image Generator",
    category: "AI / Creative Tool",
    tools: "React, Python, Stable Diffusion, FastAPI",
    image: "/images/project_imagegen.png",
  },
  {
    name: "Sentiment Analyzer",
    category: "AI / Data Science",
    tools: "Python, React, TensorFlow, Flask",
    image: "/images/project_sentiment.png",
  },
  {
    name: "AI Code Reviewer",
    category: "AI / Developer Tool",
    tools: "Next.js, TypeScript, OpenAI API, MongoDB",
    image: "/images/project_codereview.png",
  },
  {
    name: "Voice-to-Text Notes",
    category: "AI / Productivity",
    tools: "React, Web Speech API, Node.js, Express",
    image: "/images/project_voice.png",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
