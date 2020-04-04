import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import json from "./assets/json/data.json";
import js from "./assets/js/_.js";
import routes from "./components/routes";


export default function App() {
  return (
    <Router>
      <header id="header" className="container-fluid row navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <Link id="link_home" className="col-1 navbar-brand" to="/"><i className="material-icons icon-image-preview">home</i></Link>
        <h1 className="col-8">Fullstack Web-developper Portfolio</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-md-3 collapse navbar-collapse" id="navbarNav">
          <menu id="menu" className="navbar-nav">
            {routes.map(({path, name}, i)=>
              <li className="nav-item" key={i}>
                <Link id={"link_"+name.toLowerCase()} className="nav-link" to={path}>{name}</Link>
              </li>
            )}
          </menu>
        </div>
      </header>

      <Nav />
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        {/*
          <Switch>
          {routes.map(({path, name, Component}, i) =>
            <Route key={i}>
              <Component exact path={path}/>
            </Route>
            <Route exact path={path} key={i} render={Component} />
          )}
          </Switch>
        */}
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about/:param">
          <About />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home data={json.home}/>
        </Route>
      </Switch>

      <footer>
        copyright @2020
      </footer>
    </Router>

  );
}
