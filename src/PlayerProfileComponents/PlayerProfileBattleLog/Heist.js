import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";
import VsBattle from "../playerBattleComponents/VsBattle";

class Heist extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_heist.png"
        
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            <VsBattle battleLog={this.props.battleLog} brawler={this.props.brawler}></VsBattle>
            </div>
        )
    }
    
}
export default Heist;