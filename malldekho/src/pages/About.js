import React from "react";
import GroupImage from "../assets/aboutUs.png"
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import "../styles/About.css"

const AboutUsPage = () => {
  return (
    <section className="aboutUs">
      <div className="aboutusContainer">
          <div className="aboutTitle">
            <h1>About Us</h1>
            <p>we believe in transforming the way you experience shopping. With our comprehensive mall directory service, we aim to be your trusted companion in navigating the exciting world of malls.</p>
            <p>
            We pride ourselves on providing a seamless user experience, empowering you with valuable information, floor directories, and precise store locations. Our mission is to enhance your shopping pleasure and save you time by bringing you closer to the brands and experiences that matter most to you.
            </p>
          </div>
          <div className="aboutImage">
            <img src={GroupImage}/>
          </div>
      </div>
      <div className="contributor">
        <h1> Contributors </h1>
        <p>Join us on this retail adventure and unlock a world of shopping possibilities</p>
        <div className="contributorFace">
            <div className="ImgContainer">
                <img src={P1}/>
                <div className="ImgText">Mamta Gupta</div>
            </div>
            <div className="ImgContainer">
                <img src={P2}/>
                <div className="ImgText">Hiren Jethva</div>
            </div>
            <div className="ImgContainer">
                <img src={P3}/>
                <div className="ImgText">Rahul Shende</div>
            </div>

        </div>

      </div>
    </section>
  );
};


export default AboutUsPage;