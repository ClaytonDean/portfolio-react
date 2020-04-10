import React from "react";


function Contact() {
  return (
    <div>

      <div className="jumbotron container" id="indexContainer">
        <div className="index-para">About Me</div>
      </div>

      <div class="row rowStyle">

        <div className="col-sm-4">
          <img className="contactPhoto" src="/imgs/53263060_2216075605082257_7274623324573925376_o.jpg" alt="oof"></img>
        </div>

         <div className="col-sm-8">
          <div className="pOne">
            Results-oriented Software Engineer comfortable switching between
            architecture, design and implementation. Comfortable working in teams or in
            self-directed environment.
</div>


<div className="index-third"> Proficient in: </div>

<div class="row rowStyle">

  <div className="pThree col-sm-4">
  <ul className="pThree">
  <li>HTML 5</li>
  <li>CSS 3</li>
  <li>Various CSS Frameworks</li>
  <li>Core JavaScript</li>
  <li>jQuery</li>
  <li>Web / Third Party API's</li>
  <li>Server Side API's</li>
</ul>
</div>
  <div className="pThree col-sm-4">
  <ul className="pThree">
  <li>Object Oriented Data Structures</li>
  <li>NodeJS</li>
  <li>ExpressJS</li>
  <li>MySQL / MongoDB</li>
  <li>Progressive Web Applications</li>
  <li>ReactJS</li>
</ul>
</div>
</div>
        </div>


      </div>


<div className="index-third">Contact Me</div>
  <div className="pTwo">
  <ul>
  <li>Cell : (815)341-7099</li>
  <li>Email : clay_holman8@yahoo.com</li>
  <li>GitHub : 
  <a href="https://github.com/ClaytonDean"> https://github.com/ClaytonDean</a></li>
  <li>LinkedIn : 
  <a href="https://www.linkedin.com/in/clayton-dean-4469871a0"> https://www.linkedin.com/in/clayton-dean-4469871a0</a></li>
</ul>
</div>
      <div className="row">



<div className="col-sm-4 homeBtn">
  <div className="card cardStyle ">
    <div className="card-body">
      <h5 className="card-title">Home</h5>
      <a href="/" className="btn btn-dark indexBtn">Return to Homepage</a>
    </div>
  </div>
</div>

</div>

    </div>
  );
}

export default Contact;