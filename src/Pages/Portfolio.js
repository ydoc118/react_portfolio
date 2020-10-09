import React from "react";

function Portfolio() {
    return(
        <div>
            <header>
            <figure class="jumbotron jumbotron-fluid portfolioJumbo">
                <div class="container">
                <h1 class="display-4">My Portfolio</h1>
                <p class="lead">Explore some of my past projects</p>
                </div>
            </figure>
        </header>

        <main class= "container">
            <h1 class="portfolioHead">Projects</h1>
            <section class="row">
                <section class="col-sm-6 portfolioCard">
                    <a href="https://grburner.github.io/Yelp-Bar-Restaurant-Finder/" rel="noopener noreferrer" target="_blank" id="card-1" class="card mb-3" style={{width: "540px"}}>
                        <div class="row no-gutters">
                          <div class="col-md-8">
                            <div class="card-body">
                            </div>
                          </div>
                        </div>
                      </a>
                      <h5 class="title">Can't Decide!</h5>
                      <p class="description">Hungry? Thirsty? This app can help you decide where to eat or grab a drink by pulling local restaurants and bars in your area! <br /> Github Repository: <a href="https://github.com/grburner/sonics-project-1-" rel="noopener noreferrer" target="_blank">Here</a></p>
                </section>

                <section class="col-sm-6 portfolioCard">
                  <a href="https://ydoc118.github.io/Daily-planner/" rel="noopener noreferrer" target="_blank" id="card-2" class="card mb-3" style={{width: "540px"}}>
                      <div class="row no-gutters">
                        <div class="col-md-8">
                          <div class="card-body">
                          </div>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">Daily Planner</h5>
                    <p class="description">A daily workday planner that gives you the ability to plan your day by the hour! <br /> Github Repository: <a href="https://github.com/ydoc118/Daily-planner" rel="noopener noreferrer" target="_blank">Here</a></p>
                </section>
            </section>  

            <section class="row">
                <section class="col-sm-6 portfolioCard">
                    <a href="https://ydoc118.github.io/Weather-app/" rel="noopener noreferrer" target="_blank" id="card-3" class="card mb-3" style={{width: "540px"}}>
                      <div class="row no-gutters">
                        <div class="col-md-8">
                          <div class="card-body">
                          </div>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">Weather Forecast</h5>
                    <p class="description">Use the search bar to find out the current weather, and also a five day forecast, of any city! <br /> Github Repository: <a href="https://github.com/ydoc118/Weather-app" rel="noopener noreferrer" target="_blank">Here</a></p>
                </section>

                <section class="col-sm-6 portfolioCard">
                  <a href="https://ydoc118.github.io/Password-generator/" rel="noopener noreferrer" target="_blank" id="card-4" class="card mb-3" style={{width: "540px"}}>
                      <div class="row no-gutters">
                        <div class="col-md-8">
                          <div class="card-body">
                          </div>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">Password Generator</h5>
                    <p class="description">My password generator can provide you with a random password with parameters that you set yourself! <br /> Github Repository: <a href="https://github.com/ydoc118/Password-generator" rel="noopener noreferrer" target="_blank">Here</a></p>
                </section>
            </section>

            <section class="row">
                <section class="col-sm-6 portfolioCard">
                    <a href="https://quiet-ridge-60363.herokuapp.com/" rel="noopener noreferrer" target="_blank" id="card-5" class="card mb-3" style={{width: "540px"}}>
                        <div class="row no-gutters">
                        <div class="col-md-8">
                            <div class="card-body">
                            </div>
                        </div>
                        </div>
                    </a>
                    <h5 class="title">Eat-Da-Burger</h5>
                    <p class="description">Create a burger to add it to the New Burgers to Eat list, from there you can Eat Da Burger, or throw it away!  <br /> Github Repository: <a href="https://github.com/ydoc118/burger" rel="noopener noreferrer" target="_blank">Here</a></p>
                </section>

                <section class="col-sm-6 portfolioCard">
                    <a href="https://gentle-ocean-53258.herokuapp.com/" rel="noopener noreferrer" target="_blank" id="card-6" class="card mb-3" style={{width: "540px"}}>
                        <div class="row no-gutters">
                        <div class="col-md-8">
                            <div class="card-body">
                            </div>
                        </div>
                        </div>
                    </a>
                    <h5 class="title">Voting App</h5>
                    <p class="description">This voting app is a proof of concept application since we could not be provided with DMV information. Our motivation is the current state of the world with Covid and the controversy surrounding mail-in ballots. <br /> Github Repository: <a href="https://github.com/ydoc118/project-2" rel="noopener noreferrer" target="_blank">Here</a></p>
                </section>
          </section>
        </main>
        </div>
    );
};

export default Portfolio;