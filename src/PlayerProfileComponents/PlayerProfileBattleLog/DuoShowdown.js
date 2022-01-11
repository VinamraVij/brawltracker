import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";
import DuoTeams from "./DuoTeams";

class DuoShowdown extends Component{

    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_duo_showdown.png"
        
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            {this.props.battleLog?.battle?.teams.map(team=>(
                <DuoTeams team={team} brawler={this.props.brawler}></DuoTeams>
            ))}
            </div>
        )
    }
    
}
export default DuoShowdown;