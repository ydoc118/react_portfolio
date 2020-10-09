import React from "react";
import Resume from "../Assets/Cody_Blankenship_Resume.pdf"

function Contact() {
    return(
        <div>
            <header>
            <figure className="jumbotron jumbotron-fluid contactJumbo">
                <div className="container headerBackground">
                <h1 className="display-4">Contact Me</h1>
                <p className="lead">Email me or follow me on LinkedIn</p>
                </div>
            </figure>
        </header>

        <main className= "container">

            <h1 className="portfolioHead">Links to Social Media</h1>

            <section className="row">
                <section className="col-sm-3"></section>
                <section className="col-sm-6 contactCard">
                  <div className="card">
                    <div className="card-body linkedInBackground">
                      <h5 className="card-title">LinkedIn</h5>
                      <p className="card-text">Follow me on LinkedIn</p>
                      <a href="https://www.linkedin.com/in/codyericblankenship/" rel="noopener noreferrer" target="_blank" className="btn btn-primary">Click Here</a>
                    </div>
                  </div>
                </section>
            </section>

            <section className="row">
                <section className="col-sm-3"></section>
                <section className="col-sm-6 contactCard">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Email</h5>
                      <p className="card-text">Email me with any questions or comments you may have at:</p>
                      <p className="card-text">Cody.Eric.Blankenship@gmail.com</p>
                    </div>
                  </div>
                </section>
            </section>

            <section className="row">
              <section className="col-sm-3"></section>
                <section className="col-sm-6 contactCard contactCardBottom">
                    <div className="card">
                    <div className="card-body linkedInBackground">
                        <h5 className="card-title">My Resume</h5>
                        <p className="card-text">Download my resume here:</p>
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