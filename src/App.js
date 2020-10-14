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
    <Router basename={ "/react_portfolio" }>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio}  />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
