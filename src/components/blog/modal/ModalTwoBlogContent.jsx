import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Project <span>Details</span>
        </h1>
        <span className="title-bg">projects</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span className="date">
          <i className="fa fa-calendar"></i> 09/2022 -
Present
        </span>
        <span>
          <i className="fa fa-tags"></i> Augmented
Reality/ Virtual
Reality, 
NeuroAnatomy, 
Immersive
Education
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>XR System to teach
NeuroAnatomy </h1>
      <img src="img/blog/Brain.jpeg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p align="justify">
        Built in Unity, the XR System
enables users to navigate and
interact with 3D Brain
simulations in AR & VR
through C# Scripting. The
Voiceover explains the
anatomy & functionality of
Brain in Virtual Reality. The
Augmented Reality
Environment tracks the 3D
printed brain models and adds
information, textures in the
immersive space. An
evaluation section scores the
understanding at the end with
MCQ, Parts Identification &
Overall Concept
Summarisation        </p>
        {/* <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Most photographers find it hard to see interesting pictures in
            places in which they are most familiar. A trip somewhere new seems
            always exactly what our photography needed, as shooting away from
            home consistently inspires us to new artistic heights.
          </p>
        </div> */}
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
