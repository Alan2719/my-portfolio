import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Footer from "./components/footer";
import ContactInfo from "./components/info";
import Experience from "./components/pages/experience";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ContactInfo />
        {/* <Wrapper> */}
          <Route exact path= { process.env.PUBLIC_URL +  "/" } component ={About} />
          <Route exact path= { process.env.PUBLIC_URL +  "/portfolio" } component={Portfolio} />
          <Route exact path= { process.env.PUBLIC_URL +  "/experience" } component={Experience} />
        {/* </Wrapper> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
