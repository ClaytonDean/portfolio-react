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
            <a href="https://claytondean.github.io/bootstrap-portfolio/Resume/Clayton_Holman_Resume.PDF" class="btn btn-dark indexBtn">View PDF</a>
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