import React,{Component} from "react";
import Siege from "./Siege";

class BattleLog extends Component{
    renderBattleLog(){
        if(this.props.battleLog?.battle?.mode==="siege")
        {
            return <Siege siege={this.props.battleLog}></Siege>
        }
        else if(this.props.battleLog?.battle?.mode==="soloShowDown"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else if(this.props.battleLog?.battle?.mode==="hotZone"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else if(this.props.battleLog?.battle?.mode==="brawlBall"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else if(this.props.battleLog?.battle?.mode==="heist"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else if(this.props.battleLog?.battle?.mode==="gemGrab"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else if(this.props.battleLog?.battle?.mode==="duoShowDown"){
            return <div>{this.props.battleLog.battle.mode}</div>
        }
        else{
            return <div>{this.props.battleLog.battle.mode}</div>
        }
    }
    render(){
        return <div>{this.renderBattleLog()}</div>
    }
}

export default BattleLog;