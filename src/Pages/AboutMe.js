import React from "react";
import Cody from "../Assets/Cody.jpg"

function AboutMe() {
    return(
        <div>
            <header>
                <figure class="jumbotron jumbotron-fluid aboutMeJumbo">
                    <div class="container">
                    <h1 class="display-4">About Me</h1>
                    <p class="lead">A little bit about my background</p>
                    </div>
                </figure>
            </header>

            <main class= "container">
                <section class="row">
                    <section class="col-sm-12 aboutMeCard">
                        <section class="card mb-3" style={{width: "1000px"}}>
                            <div class="row">
                                <div class="col-12">
                                    <h5 class="card-title">About Me</h5>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={Cody} class="card-img" alt="Me" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">My name is Cody Blankenship and I am a Marine Corps Veteran currently attending a coding bootcamp course through University of Pennsylvania.
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