import React from "react";
import {  useLocation, useParams, useRouteMatch } from "react-router-dom";
import Jumbotron from "./blocks/Jumbotron"
import Article_ from "./blocks/Article_"

export default class About extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <main id="about">
        <Jumbotron data={this.props.data.intro} />
        <article id="accordion" className="container card py-3 mb-3">
          <Article_ data={this.props.data.universitaire} />
          <Article_ data={this.props.data.webdev} />
          <Article_ data={this.props.data.hobbies} />
        </article>
      </main>
    )
  }
}
