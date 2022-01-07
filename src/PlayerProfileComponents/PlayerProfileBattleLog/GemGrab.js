import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class GemGrab extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_gem_grab.png"
        console.log(this.props)
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            </div>
        )
    }
    
}
export default GemGrab;