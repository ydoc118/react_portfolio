import React from "react";
import Resume from "../Assets/Cody_Blankenship_Resume.pdf"

function Contact() {
    return(
        <div>
            <header>
            <figure class="jumbotron jumbotron-fluid contactJumbo">
                <div class="container headerBackground">
                <h1 class="display-4">Contact Me</h1>
                <p class="lead">Email me or follow me on LinkedIn</p>
                </div>
            </figure>
        </header>

        <main class= "container">

            <h1 class="portfolioHead">Links to Social Media</h1>

            <section class="row">
                <section class="col-sm-3"></section>
                <section class="col-sm-6 contactCard">
                  <div class="card">
                    <div class="card-body linkedInBackground">
                      <h5 class="card-title">LinkedIn</h5>
                      <p class="card-text">Follow me on LinkedIn</p>
                      <a href="https://www.linkedin.com/in/codyericblankenship/" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Click Here</a>
                    </div>
                  </div>
                </section>
            </section>

            <section class="row">
                <section class="col-sm-3"></section>
                <section class="col-sm-6 contactCard">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Email</h5>
                      <p class="card-text">Email me with any questions or comments you may have at:</p>
                      <p class="card-text">Cody.Eric.Blankenship@gmail.com</p>
                    </div>
                  </div>
                </section>
            </section>

            <section class="row">
              <section class="col-sm-3"></section>
                <section class="col-sm-6 contactCard contactCardBottom">
                    <div class="card">
                    <div class="card-body linkedInBackground">
                        <h5 class="card-title">My Resume</h5>
                        <p class="card-text">Download my resume here:</p>
                        <a href={Resume} download="Cody_Blankenship_Resume">Cody Blankenship Resume</a>
                    </div>
                    </div>
                </section>
          </section>

        </main>
        </div>
    );
};

export default Contact;