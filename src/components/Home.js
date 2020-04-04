import React from "react";
import css from "../assets/css/home.scss";

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.ok = "ok"
  }
  render(){
    return(
      <main id="home" className="">
        <h1 className="text-center">Welcome to <span>Archist</span> webdev's porfolio !</h1>
        <div id="carouselExampleIndicators" className="homeCarousel carousel slide container-fluid" data-ride="carousel">
          <ol className="carousel-indicators homeCarousel__indicators">
            {this.props.data.diapo.map((item, i)=>{
              return (
                <li data-target="#carouselExampleIndicators" data-slide-to={i} key={i} className={i===0?"active":""}></li>
              )
            })}
          </ol>
          <div className="homeCarousel__inner carousel-inner">
            {this.props.data.diapo.map((item, i)=>{
              return (
                <figure key={i} className={"homeCarousel__figure carousel-item " + (i==0?"active":"")}>
                  <img height="400" src={item.src} className={item.class} alt={item.alt}/>
                  <figcaption>
                    <div className="text-uppercase">{item.fig}</div>
                    <div>{item.fig_}</div>
                  </figcaption>
                </figure>
              )
            })}
          </div>
          <a className="homeCarousel__ctrl carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="homeCarousel__ctrl carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <article className="container mt-5 p-3 bg-dark position-relative">
          <img src={this.props.data.mwa} height="200" alt="Cyrille ACHI Web Developper" className="rounded float-left mr-3"/>
          <div className="w-60 text-white">
            <p>Hello you !</p>
            <p>My name is Cyrille ACHI, I am 33 year old now and I am pleased to present myself to you today ! I hope we'll meet soon !</p>
          </div>
        </article>
      </main>
    )
  }
}
