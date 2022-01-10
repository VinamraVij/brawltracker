import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class SoloShowdown extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_showdown.png"
        
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            </div>
        )
    }
    
}
export default SoloShowdown;