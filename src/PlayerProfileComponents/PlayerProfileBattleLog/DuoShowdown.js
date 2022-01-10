import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class DuoShowdown extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_duo_showdown.png"
        
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            </div>
        )
    }
    
}
export default DuoShowdown;