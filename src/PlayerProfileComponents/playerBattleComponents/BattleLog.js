import React,{Component} from "react";
import { brawlerContext } from "../../BrawlerContext";
import BrawlBall from "../PlayerProfileBattleLog/BrawlBall";
import Duels from "../PlayerProfileBattleLog/Duels";
import DuoShowdown from "../PlayerProfileBattleLog/DuoShowdown";
import HotZone from "../PlayerProfileBattleLog/HotZone";
import Siege from "../PlayerProfileBattleLog/Siege";
import SoloShowdown from "../PlayerProfileBattleLog/SoloShowdown";
import GemGrab from "../PlayerProfileBattleLog/GemGrab";
import Knockout from "../PlayerProfileBattleLog/Knockout";
import Bounty from "../PlayerProfileBattleLog/Bounty";

import Heist from "../PlayerProfileBattleLog/Heist";

class BattleLog extends Component{
    renderBattleLog(response){
        if(this.props.battleLog?.battle?.mode==="siege")
        {
            return <Siege battleLog={this.props.battleLog} brawler={response}></Siege>
        }
        else if(this.props.battleLog?.battle?.mode==="soloShowdown"){
            return <SoloShowdown battleLog={this.props.battleLog} brawler={response}></SoloShowdown>
        }
        else if(this.props.battleLog?.battle?.mode==="hotZone"){
            return <HotZone battleLog={this.props.battleLog} brawler={response}></HotZone>
        }
        else if(this.props.battleLog?.battle?.mode==="brawlBall"){
            return <BrawlBall  battleLog={this.props.battleLog} brawler={response}></BrawlBall>
        }
        else if(this.props.battleLog?.battle?.mode==="heist"){
            return <Heist battleLog={this.props?.battleLog} brawler={response}></Heist>
        }
        else if(this.props.battleLog?.battle?.mode==="gemGrab"){
            return <GemGrab battleLog={this.props.battleLog} brawler={response}/>
        }
        else if(this.props.battleLog?.battle?.mode==="duoShowdown"){
            return <DuoShowdown battleLog={this.props.battleLog} brawler={response}>{this.props.battleLog.battle.mode}</DuoShowdown>
        }

        else if(this.props.battleLog?.battle?.mode==="duels"){
            return <Duels battleLog={this.props.battleLog} brawler={response}>{this.props.battleLog.battle.mode}</Duels>
        }
        else if(this.props.battleLog?.battle?.mode==="knockout"){
            return <Knockout battleLog={this.props?.battleLog} brawler={response}></Knockout>
        }
        else if(this.props.battleLog?.battle?.mode==="bounty"){
            return <Bounty battleLog={this.props?.battleLog} brawler={response}></Bounty>
        }

        



        else{
            return <div>{this.props.battleLog.battle.mode}</div>
        }
    }
    render(){
        return (
            <brawlerContext.Consumer>
            {response=>{
                
                return(
                    <div className="battle-log">
            
            {this.props.battleLog.battle.mode.toUpperCase()}
            {this.renderBattleLog(response)}
            </div>
                )
            }}
            {/* <div className="battle-log">
            
            {this.props.battleLog.battle.mode.toUpperCase()}
            {this.renderBattleLog()}
            </div> */}
            </brawlerContext.Consumer>)
    }
}

export default BattleLog;