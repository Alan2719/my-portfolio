import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path= { process.env.PUBLIC_URL +  "/" } component ={About} />
        <Route exact path= { process.env.PUBLIC_URL +  "/contact" } component={Contact} />
        <Route exact path= { process.env.PUBLIC_URL +  "/portfolio" } component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
