import { useState, useEffect } from "react";
import "./styles/ScrollToTop.css";
import { MdArrowUpward } from "react-icons/md";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-top-btn ${visible ? "scroll-top-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <MdArrowUpward />
    </button>
  );
};

export default ScrollToTop;
