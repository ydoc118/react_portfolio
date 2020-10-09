import React from "react";
import Cody from "../Assets/Cody.jpg"

function AboutMe() {
    return(
        <div>
            <header>
                <figure className="jumbotron jumbotron-fluid aboutMeJumbo">
                    <div className="container">
                    <h1 className="display-4">About Me</h1>
                    <p className="lead">A little bit about my background</p>
                    </div>
                </figure>
            </header>

            <main className= "container">
                <section className="row">
                    <section className="col-sm-12 aboutMeCard">
                        <section className="card mb-3" style={{width: "1000px"}}>
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="card-title">About Me</h5>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={Cody} className="card-img" alt="Me" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">My name is Cody Blankenship and I am a Marine Corps Veteran currently attending a coding bootcamp course through University of Pennsylvania.
                                        I was born and raised in Bradenton Florida and joined the Marines when I was 21 years old. I served from 2010-2014, and was overseas for one tour in 
                                        Kuwait and Bahrain. Upon leaving the Marine Corps, I went back to school at the University of South Florida: St. Petersburg campus where I would earn
                                        my Bachelors degree in Finance. I made the decision to do the coding bootcamp because of my love for computers and I felt I needed to get into a career
                                        where I could be challenged day to day while working with something I enjoy.
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </section>
                    </section>
                </section>

            </main>
        </div>
    );
};

export default AboutMe;