import React from "react";


function Portfolio() {
  return (
    <div>

      <div className="jumbotron container" id="indexContainer">
        <div className="index-para">Portfolio</div>
        {/* <div className="index-second">Developed Projects</div> */}
      </div>


<div className="row ">

    <div className="col-sm-4">
        <div className="card cardStyleP">
          <div className="card-body">
            <h5 className="card-title">Pokemon Battle</h5>
            <img className="projectImg"src="/imgs/pokemon.png" alt="oof"></img>
            <p>Pokemon Battle App using HTML, CSS, Jquery, and Express Handlebars on the front end and uses Node.js, Express, MySQL, and Sequelize on the back end.</p>
            <a href="https://glacial-beyond-53964.herokuapp.com/pokedex" class="btn btn-dark">View</a>
                <a href="https://github.com/JacksonCroy/Dope-Pokemon-Dopeness" class="btn btn-dark">View with Github</a>
          </div>
        </div>
    </div>

    <div className="col-sm-4">
        <div className="card cardStyleP">
          <div className="card-body">
            <h5 className="card-title">Eat the Pizza!</h5>
            <img className="projectImg"src="/imgs/Pizza.png" alt="oof"></img>
            <p>Utilizes nodeJS, express, handlebars, and mySQL to configure an exercise designed to help understand the fundamentals of MVC as well as get/post/put/delete methods</p>
                <a href="https://boiling-beach-59041.herokuapp.com/" class="btn btn-dark">View</a>
                <a href="https://github.com/ClaytonDean/eat-the-pizza" class="btn btn-dark">View with Github</a>
          </div>
        </div>
    </div>

    <div className="col-sm-4">
        <div className="card cardStyleP">
          <div className="card-body">
            <h5 className="card-title">NoteTaker</h5>
            <img className="projectImg"src="/imgs/Notetaker.png" alt="oof"></img>
            <p>Uses HTML and API routing to display, post, and delete the users note title and note text</p>
                <a href="https://agile-plains-83236.herokuapp.com/" class="btn btn-dark">View</a>
                <a href="https://github.com/ClaytonDean/heroku-note-taker" class="btn btn-dark">View with Github</a>
          </div>
        </div>
    </div>

    <div className="col-sm-4">
        <div className="card cardStyleP">
          <div className="card-body">
            <h5 className="card-title">GrocerEASE</h5>
            <img className="projectImg"src="/imgs/Annotation 2020-02-27 022214.png" alt="oof"></img>
            <p>Ingredients search engine using ajax calls within a polished UI</p>
              <a href="https://lorddominic.github.io/grocerEASE/" class="btn btn-dark">View</a>
              <a href="https://github.com/lorddominic/grocerEASE" class="btn btn-dark align-self-end">View with Github</a>
          </div>
        </div>
    </div>

    <div className="col-sm-4">
        <div className="card cardStyleP">
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <img className="projectImg"src="/imgs/WeatherDashboard.png" alt="oof"></img>
            <p>Uses ajax calls to find specific weather forecasts depending on city or country</p>
              <a href="https://claytondean.github.io/Weather_App/" class="btn btn-dark">View</a>
              <a href="https://github.com/ClaytonDean/Weather_App" class="btn btn-dark">View with Github</a>
          </div>
        </div>
    </div>

    <div className="col-sm-4">
        <div className="card cardStyleP">
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <img className="projectImg"src="/imgs/PasswordGenerator.png" alt="oof"></img>
            <p>Creates various passwords depending on user specifications</p>
              <a href="https://claytondean.github.io/password-generator/" class="btn btn-dark">View</a>
              <a href="https://github.com/ClaytonDean/password-generator" class="btn btn-dark">View with Github</a>
          </div>
        </div>
    </div>


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

export default Portfolio;