import React,{Component} from "react"

class BrawlerGadget extends Component{
    render(){
        const image="https://cdn.brawlstats.com/gadgets/"+this.props.gadget.id+".png"
        return(
            <div align="right" className="brawler-gadget-div">
            <img src={image} className="brawler-gadget-image"></img>
            </div>
        )
    }
}
export default BrawlerGadget;