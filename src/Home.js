import React from "react";
import img1 from "./img/img1.jpg"
import images from "./images.js";

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.ok = "ok"
  }
  render(){
    if(this.props.diapo)return(
      <main>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            {this.props.diapo.diapo.map((item, i)=>{
              return (
                <li data-target="#carouselExampleIndicators" data-slide-to={i} key={i} className={i==0?"active":""}></li>
              )
            })}
          </ol>
          <div class="carousel-inner">
            {this.props.images.map((item, i)=>{
              return (
                <figure key={i} className={i==0?"figure carousel-item active":"figure carousel-item"}>
                  //<div className={item.class}></div>
                  <img src={item.src} alt=""/>//THIS DOESN'T WORKED
                </figure>
              )
            })}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </main>
    );else
    return (
      <div>ok</div>
    )
  }
}
