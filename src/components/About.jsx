import React from "react";
import data from "../data";
const About = () => {
  const aboutImage = data.about.image;
  // Destructuring about text
  const { subtitle, name, work, desc, btn_text } = data.about.text;
  return (
    <div className="about" name="about" id="about">
      <div className="row">
        <div className="col-12 col-md-6">
          <img data-aos='fade-up' data-aos-delay='900' className="w-100 h-100 py-2" src={aboutImage} alt="" />
        </div>
        <div className="col-12 col-md-6  d-flex flex-column justify-content-center text-center text-md-left align-items-center align-items-md-start">
          <div className="about_subtitle" data-aos='fade-down' data-aos-delay='900'>
            <strong>{subtitle}</strong>
          </div>
          <div className="name_and_about_text" data-aos='fade-down' data-aos-delay='800'>
            {" "}
            <h1>
              {" "}
              <b>
                {name} <br />
                {work}
              </b>
            </h1>
          </div>
          <div className="about_desc" data-aos='fade-down' data-aos-delay='700'>{desc}</div>
          <div className="resume_link" data-aos='fade-down' data-aos-delay='600'>
            <a href="/resume.pdf">{"Full Resume>"}</a>
          </div>
          <div className="contact_btn" data-aos='fade-down' data-aos-delay='500'>
            <button className="py-3 px-3"><a href="#contact" style={{textDecoration:'none', color:'white'}}>{btn_text}</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
