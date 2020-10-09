import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
