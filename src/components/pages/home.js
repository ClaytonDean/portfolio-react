import React from "react";


function Home() {
  return (
    <div>

      <div className="jumbotron container" id="indexContainer">
        <div className="index-para"> Clayton Dean Holman</div>
        <div className="index-second"> Full Stack Software Developer</div>
      </div>


    <div className="row">

      <div className="col-sm-4">
        <div className="card cardStyle">
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <a href="portfolio" className="btn btn-dark indexBtn">View</a>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="card cardStyle">
          <div className="card-body">
            <h5 className="card-title">Resume</h5>
            <a href="https://docs.google.com/document/d/1ZhAknMfyPEV5SjV1enT8dl_VO4uTOGlwaqgaz2MHEtc/edit" className="btn btn-dark indexBtn">View in Google Docs</a>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="card cardStyle">
          <div className="card-body">
            <h5 className="card-title">About Me / Contact Page</h5>
            <a href="contact" className="btn btn-dark indexBtn">View</a>
          </div>
        </div>
      </div>

      </div>




    </div>
  );
}

export default Home;