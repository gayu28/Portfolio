import React from "react";

const ModalThreeBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 10/2022 -
Present
        </span>
        <span>
          <i className="fa fa-tags"></i> Prototyping
Figma
Design Concepts
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}
    <div className="link">
      <h1>Mobile Application Design
for awareness & remote
patient recovery during
Pandemic <a href="https://github.com/sowmiya-2805/SOMPS-Net-Social-graph-framework-for-fake-health-news-detection"><i class="fa fa-link" aria-hidden="true"></i></a>  </h1>
  </div>
      <img src="img/blog/AppDesign.png" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        
        <p align="justify">
        Prototyping a mobile
application (in Figma) with
animations explaining COVID
& its symptoms and provides
facilities to connect Doctors
for remote consultation. The
Integrity is ensured by
approving the content and
Doctors’ license by an
automated system endorsed by
legal authority. Incorporates
essential Design concepts like
Sustainability, Speculative
Design and Designing from
the margins     </p> </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
