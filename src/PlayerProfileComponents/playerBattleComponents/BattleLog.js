import React,{Component} from "react";
import { brawlerContext } from "../../BrawlerContext";
import BrawlBall from "../PlayerProfileBattleLog/BrawlBall";
import Duels from "../PlayerProfileBattleLog/Duels";
import DuoShowdown from "../PlayerProfileBattleLog/DuoShowdown";
import HotZone from "../PlayerProfileBattleLog/HotZone";
import Siege from "../PlayerProfileBattleLog/Siege";
import SoloShowdown from "../PlayerProfileBattleLog/SoloShowdown";
import GemGrab from "./GemGrab";

class BattleLog extends Component{
    renderBattleLog(response){
        if(this.props.battleLog?.battle?.mode==="siege")
        {
            return <Siege battleLog={this.props.battleLog} barwler={response}></Siege>
        }
        else if(this.props.battleLog?.battle?.mode==="soloShowdown"){
            return <SoloShowdown battleLog={this.props.battleLog} barwler={response}></SoloShowdown>
        }
        else if(this.props.battleLog?.battle?.mode==="hotZone"){
            return <HotZone battleLog={this.props.battleLog} barwler={response}></HotZone>
        }
        else if(this.props.battleLog?.battle?.mode==="brawlBall"){
            return <BrawlBall  battleLog={this.props.battleLog} barwler={response}></BrawlBall>
        }
        else if(this.props.battleLog?.battle?.mode==="heist"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else if(this.props.battleLog?.battle?.mode==="gemGrab"){
            return <GemGrab battleLog={this.props.battleLog} barwler={response}/>
        }
        else if(this.props.battleLog?.battle?.mode==="duoShowdown"){
            return <DuoShowdown battleLog={this.props.battleLog} barwler={response}>{this.props.battleLog.battle.mode}</DuoShowdown>
        }

        else if(this.props.battleLog?.battle?.mode==="duels"){
            return <Duels battleLog={this.props.battleLog} barwler={response}>{this.props.battleLog.battle.mode}</Duels>
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