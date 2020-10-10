import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/react_portfolio" component={Home} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio}  />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
