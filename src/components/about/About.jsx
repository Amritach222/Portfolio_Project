import React from "react";
import './about.scss'
const About = () => {
  // Destructuring about text
  return (
    <div className="about" name="about" id="about">
      <div className="row">
        <div className="col  d-flex flex-column justify-content-center text-center text-md-left align-items-center align-items-md-start">
          <div className="name_and_about_text" >
            {" "}
            <h1>
             About me.
            </h1>
          </div>
          <div className="about_desc" >
          <p>
          As a MERN developer, I specialize in building web applications using
          the MERN stack, which includes MongoDB, Express.js, React.js, and
          Node.js. With extensive skills in developing scalable and robust web
          applications, I am committed to delivering high-quality solutions
          that meet the needs of my clients. I possess strong problem-solving
          skills and am well-versed in agile methodologies, allowing me to
          work collaboratively with cross-functional teams and deliver
          projects on time and within budget. I am constantly keeping
          up-to-date with the latest technologies and industry trends to
          ensure that I can provide the best solutions to my clients. If you
          are looking for a skilled MERN developer who is passionate about
          delivering high-quality web applications, please don't hesitate to
          reach out to me.
        </p>
          </div>
          <div className="resume_link" >
          <div>
          <a href="/resume.pdf">{"Full Resume>"}</a>
          <div className="contact_btn" >
          <button><a href="#contact" style={{textDecoration:'none', color:'white'}}>Contact me</a></button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
