import React from "react";
import data from "../data";
const Skills = () => {
  const { design, web, management } = data.skills;
  return (
    <div className="skills" id="skills">
      <div className="skills_container py-5">
        <div className="skills_header d-flex align-items-center justify-content-center">
          <h1>What I Do</h1>
        </div>
        <br />
        <br />
        <div className="skills_container_content">
          <div className="row">
            <div data-aos='fade-right' data-aos-delay='500' className="col-12 col-md-4 col_first d-flex flex-column align-items-center justify-content-start m-0 p-0 py-3">
              <div className="skill_title">{web.title}</div>
              <br />
              <br />
              <div className="skill_commit text-center">
                Comfortable with most platforms...
              </div>
              <div className="skill_list text-secondary text-center">
                {web.skills.map((skill, index) => {
                  return (
                    <div className="" key={index}>
                      <b>{skill}</b>
                    </div>
                  );
                })}
                <div className="extra_skill"> <b>+ more</b></div>
              </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='500' className="col-12 col-md-4 col_second d-flex flex-column align-items-center justify-content-start m-0 p-0 py-3">
              <div className="skill_title">{design.title}</div>
              <br />
              <br />
              <div className="skill_commit text-center"> I do...</div>
              <div className="skill_list text-secondary text-center">
                {design.skills.map((skill, index) => {
                  return (
                    <div className="" key={index}>
                      <b>{skill}</b>
                    </div>
                  );
                })}
                <div className="extra_skill"> <b>+ more</b></div>
              </div>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className="col-12 col-md-4 col_third d-flex flex-column align-items-center justify-content-start m-0 p-0 py-3">
              <div className="skill_title">{management.title}</div>
              <br />
              <br />
              <div className="skill_commit text-center">
                I'm well trained in...
              </div>
              <div className="skill_list text-secondary text-center">
                {management.skills.map((skill, index) => {
                  return (
                    <div className="" key={index}>
                      <b>{skill}</b>
                    </div>
                  );
                })}
                <div className="extra_skill"> <b>+ more</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
