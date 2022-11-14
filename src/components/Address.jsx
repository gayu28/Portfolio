import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>2702 Moorehead Avenue, Boulder, Colorado - 80305
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-linkedin position-absolute"></i>
        <span className="d-block">Get linked</span>{" "}
        <a href="https://www.linkedin.com/in/sowmiya2805/">soumiya2805</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:sowmiya.shubbarayan@colorado.edu">sowmiya.shubbarayan@colorado.edu</a>
      </p>
      {/* End .custom-span-contact */}


      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +1 415 740 0022">+1 415 740 0022</a>
      </p>
    </>
  );
};

export default Address;
