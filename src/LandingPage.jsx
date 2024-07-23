import { useState } from "react";
import girlwithearing from "./images/girlwithearing.png";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export function LandingPage({ setInLandingPage }) {
  const [hover, setHover] = useState(false);
  function handleLandingPage() {
    setInLandingPage(false);
  }
  return (
    <div className="container">
      <nav>
        <span>Nursus</span>
        <div className="topcenter">
          <p id="linkanimation">why us</p>
          <p id="linkanimation">how it works</p>
        </div>
        <div className="different">
          <p
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <a
              href="https://twitter.com/ibragm_ibra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter color={hover ? "black" : "white"} size={"30px"} />
            </a>
          </p>
          <p
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <a
              href="https://www.linkedin.com/in/ibragim-ibragimov-1b606024b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn color={hover ? "black" : "white"} size={"30px"} />{" "}
            </a>
          </p>
        </div>
      </nav>
      <header>
        <div className="imageand">
          <p>Modern way to learn language</p>
          <img src={girlwithearing} alt="" />
        </div>
        <div>
          <a href="#" onClick={handleLandingPage} className="btn">
            Start now
          </a>
        </div>
      </header>
    </div>
  );
}
