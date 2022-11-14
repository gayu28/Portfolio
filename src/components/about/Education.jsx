import React from "react";

const educationContent = [
  {
    year: "2022-Present",
    degree: "Masters in Creative Technologies & Design",
    institute: "UNIVERSITY OF COLORADO, BOULDER",
    details: `Focussing on Design Foundations,  User Experience (UX) and Augmented & Virtual Reality`,
    location: 'Boulder, Colorado, USA'
  },
  {
    year: "2018-2022",
    degree: "BACHELORS OF ENGINEERING",
    institute: "COLLEGE OF ENGINEERING, ANNA UNIVERSITY",
    details: `Majors in Computer Science and Engineering;
    Specialised in Object Oriented Programming, Machine Learning & Parallel Computing`,
    location: 'Chennai, India'
  },
  {
    year: "2016-2018",
    degree: "HIGHER SECONDARY",
    institute: "BHARATHI VIDYA BHAVAN",
    details: `Secured 96.75% in Science stream; Held responsibility as a House Captain`,
    location: 'Erode, India'

  },
  
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                     </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <h5> <i class="fa fa-map-marker" aria-hidden="true"></i> {val.location} </h5>

        </li>
      ))}
    </ul>
  );
};

export default Education;
