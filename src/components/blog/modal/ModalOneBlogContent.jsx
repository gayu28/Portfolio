import React from "react";

const ModalOneBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 11/2022 - Present
        </span>
        <span>
          <i className="fa fa-tags"></i> Data Visualisation,
Charts.js,
Network Insights
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Interactive Dashboard for
network insights of personal
LinkedIn profile</h1>
      <img src="img/blog/Dashboard.png" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p align="justify">
        A compelling dashboard built
primarily using Charts.js (a
javascript library) to
demonstrate the quality and
growth of LinkedIn network.
The personal archived data is
downloaded and processed
with Python that is used for
the data visualisation. There
are lots of things to analyse
about one’s connections other
than just the count. Especially,
this can help self-assessment
for actively job seeking young
professionals.         </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
