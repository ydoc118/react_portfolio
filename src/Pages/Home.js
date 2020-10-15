import React from "react";
import aboutMeImg from '../Assets/aboutMe.png';
import portfolioImg from '../Assets/Portfolio.jpg';
import contactImg from '../Assets/contactMe.jpg';

function Home() {
    return(
        <div>
            <header>
                <figure className="jumbotron jumbotron-fluid homeJumbo">
                    <div className="container">
                    <h1 className="display-4">TEST 2 Blankenship</h1>
                    <p className="lead">Welcome to my Professional Portfolio</p>
                    </div>
                </figure>
            </header>

            <main className="container">
                <section className="row">
                    <section className="col-xl-4 col-lg-4 col-sm-2 col-md-3"></section>
                    <a href={ "/aboutMe" } className="cardLink col-xl-4 col-lg-4 col-sm-8 col-md-6">
                        <section className="col-sm-4">
                            <section className="card align-item-center aboutCard" style={{ width: "18rem" }}>
                                <img src={ aboutMeImg } className="card-img-top" alt="About Me" />
                                <div className="card-body">
                                <p className="card-text">Me in 30 seconds</p>
                                </div>
                            </section>
                        </section>
                    </a>
                    <section className="col-xl-4 col-lg-4 col-sm-2 col-md-3"></section>

                </section>

                <section className="row">
                    <section className="col-xl-4 col-lg-4 col-sm-2 col-md-3"></section>
                    <a href={ "/portfolio" } className="cardLink col-xl-4 col-lg-4 col-sm-8 col-md-6">
                        <section className="col-sm-4">
                            <section className="card" style={{ width: "18rem" }}>
                                <img src={ portfolioImg } className="card-img-top  justify-content-center" alt="Portfolio" />
                                <div className="card-body  justify-content-center">
                                <p className="card-text  justify-content-center">Explore my projects</p>
                                </div>
                            </section>
                        </section>
                    </a>
                    <section className="col-xl-4 col-lg-4 col-sm-2 col-md-3"></section>

                </section>

                <section className="row">
                    <section className="col-xl-4 col-lg-4 col-sm-2 col-md-3"></section>
                    <a href={ "/contact" } className="cardLink col-xl-4 col-lg-4 col-sm-8 col-md-6">
                        <section className="col-sm-4">
                            <section className="card" style={{ width: "18rem" }}>
                                <img src={ contactImg } className="card-img-top" alt="Contact Me" />
                                <div className="card-body">
                                <p className="card-text">Contact me</p>
                                </div>
                            </section>
                        </section>
                    </a>
                    <section className="col-xl-4 col-lg-4 col-sm-2 col-md-3"></section>

                </section>

            </main>
        </div>
    );
}

export default Home;