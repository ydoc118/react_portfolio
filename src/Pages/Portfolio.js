import React from "react";
import barFinder from "../Assets/project-pic.png";
import scheduler from "../Assets/scheduler-pic.png";
import weatherApp from "../Assets/Weather-pic.png";
import password from "../Assets/password-pic.png";
import burger from "../Assets/week13img.png";
import voting from "../Assets/voteApp.png";

function Portfolio() {
    const portfolioLinks = [
        {
          title: "Can't Decide!",
          description: "Hungry? Thirsty? This app can help you decide where to eat or grab a drink by pulling local restaurants and bars in your area!",
          repo: "https://github.com/grburner/sonics-project-1-",
          app: "https://grburner.github.io/Yelp-Bar-Restaurant-Finder/",
          image: barFinder
        },
        {
          title: "Daily Planner",
          description: "A daily workday planner that gives you the ability to plan your day by the hour!",
          repo: "https://github.com/ydoc118/Daily-planner",
          app: "https://ydoc118.github.io/Daily-planner/",
          image: scheduler
        },
        {
          title: "Weather Forecast",
          description: "Use the search bar to find out the current weather, and also a five day forecast, of any city!",
          repo: "https://github.com/ydoc118/Weather-app",
          app: "https://ydoc118.github.io/Weather-app/",
          image: weatherApp
        },
        {
          title: "Password Generator",
          description: "My password generator can provide you with a random password with parameters that you set yourself!",
          repo: "https://github.com/ydoc118/Password-generator",
          app: "https://ydoc118.github.io/Password-generator/",
          image: password
        },
        {
          title: "Eat-Da-Burger",
          description: "Create a burger to add it to the New Burgers to Eat list, from there you can Eat Da Burger, or throw it away!",
          repo: "https://github.com/ydoc118/burger",
          app: "https://quiet-ridge-60363.herokuapp.com/",
          image: burger
        },
        {
          title: "Voting App",
          description: "This voting app is a proof of concept application since we could not be provided with DMV information. Our motivation is the current state of the world with Covid and the controversy surrounding mail-in ballots.",
          repo: "https://github.com/ydoc118/project-2",
          app: "https://gentle-ocean-53258.herokuapp.com/",
          image: voting
        },
      ]
    return(
        <div>
            <header>
            <figure className="jumbotron jumbotron-fluid portfolioJumbo">
                <div className="container">
                <h1 className="display-4">My Portfolio</h1>
                <p className="lead">Explore some of my past projects</p>
                </div>
            </figure>
        </header>

        <main className= "container">
            <h1 className="portfolioHead">Projects</h1>
            <section className="row">
                { portfolioLinks.map(({ title, description, repo, app, image }, index) => 
                    <section className="col-sm-6 portfolioCard">
                        <a href={ app } rel="noopener noreferrer" target="_blank" id="card-1" className="card mb-3" style={{ width: "540px", backgroundImage: "url(" + image + ")" }}>
                        
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="card-body"></div>
                                </div>
                            </div>
                        </a>
                        <h5 className="title">{ title }</h5>
                        <p className="description">{ description } <br /> Github Repository: <a href={ repo } rel="noopener noreferrer" target="_blank">Here</a></p>
                    </section>
                )}
            </section>
                
        </main>
        </div>
    );
};


export default Portfolio;