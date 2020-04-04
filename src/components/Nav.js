import React from "react";
import {  Switch, Route, useLocation, useParams, useRouteMatch } from "react-router-dom";

export default function Nav(){
  let pathname = useLocation().pathname;
  // pathname = pathname.split('/')
  // pathname.shift()
  let path_1 = useRouteMatch("/:_1")
  let path_2 = useRouteMatch("/:_1/:_2")
  let path_3 = useRouteMatch("/:_1/:_2/:_3")
  console.log(pathname);
  console.log(path_1);
  console.log(path_2);
  console.log(path_3);
  let header_a = document.getElementById('header')
  return(
    <nav className="nav">
      {console.log(header_a)}
      <ul className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
{/*
      {
        if(path_1}{
          <li className="separator"></li>
          <li className="breadcrumb-item"><a href={"/"+path_1.params._1}>path_1.params._1</a></li>
        }
      }
*/}
      </ul>
      {/*
        <Route exact  path="/contact">
          {document.getElementById('home') ? console.log("home"):""}
        </Route>
      */}
    </nav>
  )
}
