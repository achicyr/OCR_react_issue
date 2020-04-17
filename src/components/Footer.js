import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Footer(props){
  return(
    <footer className="container-fluid p-5">
      <div className="row">
        <div className="col-md">
          <h3>Find me on social networks</h3>
          <ul>
          {props.data.socialnetworks.map((item,i)=>
            <li key={i}><Link title={item.title} to={item.href}>item.texte</Link></li>
          )}
          </ul>
        </div>
        <div className="col-md">
          <h3>Find website I made</h3>
          <ul>
          {
            props.data.websites.map((item,i) =>
              <li key={i}><Link title={item.title} to={item.href}>item.texte</Link></li>
            )
          }
          </ul>
        </div>
        <div className="col-md">
          <h3 className="text-center">Find usefull links about me you may need</h3>
          <ul>
            {
              props.data.links.map((item,i) =>
                <li key={i}><Link title={item.title} to={item.href}>item.texte</Link></li>
              )
            }
          </ul>
        </div>
      </div>
      <div className="row text-center border-top">copyright @2020</div>
    </footer>
  )
}
