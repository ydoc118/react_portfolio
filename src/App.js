import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div className="App">
        <Nav />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio}  />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
        <Footer />
      </div>
      <Switch>
        <Route exact path="/aboutMe" exact render={() => <AboutMe />} />
        <Route exact path="/portfolio" exact render={() => <Portfolio />} />
        <Route exact path="/contact" exact render={() => <Contact />} />
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
