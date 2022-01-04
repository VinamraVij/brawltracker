import React,{Component} from "react";

class BrawlerStarPower extends Component{
    render(){
        const image="https://cdn.brawlstats.com/star-powers/"+this.props.starPower.id+".png"
        
        return(
            <div align="right" className="brawler-gadget-div">
            <img src={image} className="brawler-gadget-image"></img>
            </div>
        )
    }
}

export default BrawlerStarPower;