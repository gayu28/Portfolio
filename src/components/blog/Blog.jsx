import React, { useState } from "react";
import Modal from "react-modal";

import ModalOneBlogContent from "./modal/ModalOneBlogContent";
import ModalTwoBlogContent from "./modal/ModalTwoBlogContent";
import ModalThreeBlogContent from "./modal/ModalThreeBlogContent";
import ModalFourBlogContent from "./modal/ModalFourBlogContent";
// import ModalFiveBlogContent from "./modal/ModalFiveBlogContent";
// import ModalSixBlogContent from "./modal/ModalSixBlogContent";
// import ModalSevenBlogContent from "./modal/ModalSevenBlogContent";
// import ModalEightBlogContent from "./modal/ModalEightBlogContent";
// import ModalNineBlogContent from "./modal/ModalNineBlogContent";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }

  return (
    <>
      

      {/*  Blog 2 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          {/* <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project2.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div> */}
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>XR System to teach
NeuroAnatomy </h3>
            </div>
            <div className="entry-content open-sans-font">
              <p align="justify">
              Built in Unity, the XR System enables users to navigate and interact with 3D Brain simulations in AR & VR through C# Scripting. An evaluation section scores the understanding at the end with MCQ, Parts Identification & Overall Concept Summarisation.             </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalTwoBlogContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalTwoBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoBlogContent */}
      </div>
      {/*  Blog 2 Ends */}
 


      {/*  Blog 3 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          {/* <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project3.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div> */}
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Mobile Application Design
for awareness & remote
patient recovery during
Pandemic</h3>
            </div>
            <div className="entry-content open-sans-font">
            <p align="justify">
            Prototyping a mobile application (in Figma) with animations explaining COVID & its symptoms and provides facilities to connect Doctors for remote consultation. Incorporates essential Design concepts like Sustainability, Speculative Design and Designing from the margins. </p>      </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalThreeBlogContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalThreeBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeBlogContent */}
      </div>
      {/* Blog 3 Ends */}


      {/* Blog 1 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFour}>
          {/* <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project4.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div> */}
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>3D print model generation from biomedical images</h3>
            </div>
            <div className="entry-content open-sans-font">
            <p align="justify">
              A Workflow that combines image segmentation & 3D simulations to extract tumor from MRI brain scans & devise models capable of 3D printing. 
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFourBlogContent */}
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFour}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFourBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFourBlogContent */}
      </div>
      {/* Blog 4  Ends */}

        
      {/*  Blog 1 Ends */}    


             
      
    </> 
  );
};

export default Blog;
