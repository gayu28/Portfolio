import React from "react";

const experienceContent = [
  {
    year: "   FEB 2021 - FEB 2022",
    position: "VR RESEARCH INTERN",
    compnayName: "IIT Madras Research Park",
    details: `C# Scripting in Unity to simulate virtual experiences to train young surgeons for complicated surgeries without risking human life.`,
    location: 'Chennai, India'
  },
  {
    year: "APR 2020 - MAY 2022",
    position: "WEB DESIGNER & DEVELOPER",
    compnayName: "Mara Vascular and Interventional Radiology",
    details: `Designed & Developed the website for the radiology centre and Deployed it in Amazon Web Services (AWS). Also worked on incorporating 3D Animations for patient education`,
    location: 'Oklahoma, USA'

  },
  {
    year: "APR 2020 - MAY 2022",
    position: "RESEARCH & TEACHING ASSISTANT",
    compnayName: "Solarillion Foundation",
    details: `Core research on behavioral analysis and Image processing;
    Guiding students with research methodologies`,
    location: 'Chennai, India'

  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
         <h5> <i class="fa fa-map-marker" aria-hidden="true"></i> {val.location} </h5>
         

        </li>
      ))}
    </ul>
  );
};

export default Experience;
