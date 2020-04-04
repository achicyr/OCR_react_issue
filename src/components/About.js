import React from "react";
import {  useLocation, useParams, useRouteMatch } from "react-router-dom";

export default function About(){
  let {param} = useParams()
  console.log(param);
  return(
    <div>lmkj</div>
  )
}
