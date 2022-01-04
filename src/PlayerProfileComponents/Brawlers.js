import React,{Component} from "react";
import Brawler from "./Brawler";

class Brawlers extends Component{
    

    render(){
        return(
            <div className="player-brawlers">
                <label style={{
                    display: "block", 
                color:"black", 
                textAlign:"center", 
                marginBottom:"20px",
                fontSize:"32px"}}>
                    Player Brawlers
                    </label>
                    {this.props.playerData.brawlers.map((brawler)=>(
                        <Brawler key={brawler.id} brawler={brawler}></Brawler>
                    ))}
            </div>
        )
    }
}

export default Brawlers;