import React from "react";
import "./About.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import webVideo from "../../images/web1.mp4";
import resume from "../../images/resume.pdf";
import { UilFileDownload } from "@iconscout/react-unicons";


const About = () => {
  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank"; // Open the link in a new tab
    link.download = "Gokul_Resume.pdf"; // Specify the download file name

    // Trigger the click event to start the download
    link.click();

    // Show toast notification on successful download
    toast.success("Resume downloaded!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div id="About" >
      <div className="aboutLeft">
        {/* <video src={webVideo} width="600" height="500" autoPlay muted loop /> */}
        <video src={webVideo} width="500" height="400" autoPlay muted loop className="webDevVideo" />
      </div>
      <div className="aboutRight" data-aos="fade-right">
        <h3 className="title" >
          ABOUT ME
        </h3>
        <p >
          Welcome to the digital wonderland of a web developer's mind! 🌐✨
          Unlocking boundless creativity with code, I invite you to explore my
          pixel-perfect playground where innovation meets design. 🚀🎨 Step into
          a world of captivating websites and cutting-edge solutions that
          breathe life into your online aspirations! 💻🌟
        </p>
        <button className="btn downloadBtn" onClick={handleDownloadCV}>
          Download CV
          <UilFileDownload className="downloadIcon" />
        </button>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default About;
