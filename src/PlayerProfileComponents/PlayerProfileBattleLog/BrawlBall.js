import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class BrawlBall extends Component{
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_brawl_ball.png"
        console.log(this.props)
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            </div>
        )
    }
    
}
export default BrawlBall;