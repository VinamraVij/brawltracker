import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class Duels extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_siege.png"
        console.log(this.props)
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            </div>
        )
    }
    
}
export default Duels;