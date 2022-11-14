import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Sowmiya Shubbarayan" },
  { meta: "Age", metaInfo: "21 Years" },
  // { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Degree", metaInfo: "Master's" },
  // { meta: "langages", metaInfo: "English, Tamil" },
  { meta: "phone", metaInfo: "+1 415 740 0022" },
  { meta: "Location", metaInfo: "Boulder, Colorado" },
  { meta: "Email", metaInfo: "sowmiya.shubbarayan@colorado.edu" },
  
  
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
