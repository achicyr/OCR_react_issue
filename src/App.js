import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Comp from "./Comp"
import Nav from "./Nav"
import json from "./data.json";
import images from "./images.js";
import js from "./_.js";

export default function App() {
  return (
    <Router>
      <header class="container-fluid row navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <Link id="home" class="col-1 navbar-brand" to="/"><i class="material-icons icon-image-preview">home</i></Link>
        <h1 class="col-8">Javascript Fullstack Web-developper Portfolio</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-md-3 collapse navbar-collapse" id="navbarNav">
          <menu id="menu" class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/skills">Skills</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contacts">Contacts</Link>
            </li>
          </menu>
        </div>
      </header>

      <Nav />
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/skills">
          <Comp />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Home contact={true}/>
        </Route>
        <Route path="/">
          <Home diapo={json} images={images}/>
        </Route>
      </Switch>
    </Router>
  );
}
