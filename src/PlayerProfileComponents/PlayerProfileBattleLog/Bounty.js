import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";
import VsBattle from "../playerBattleComponents/VsBattle";

class Bounty extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_bounty.png"
        console.log(this.props)
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} img={img}></BattleInfoDiv>
            <VsBattle battleLog={this.props.battleLog} brawler={this.props.brawler}></VsBattle>
            </div>
        )
    }
    
}
export default Bounty;