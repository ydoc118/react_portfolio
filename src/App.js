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
        <Route exact path={ process.env.PUBLIC_URL + "/aboutMe" } component={AboutMe} />
        <Route exact path={ process.env.PUBLIC_URL + "/portfolio" } component={Portfolio}  />
        <Route exact path={ process.env.PUBLIC_URL + "/contact" } component={Contact} />
        <Route path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
