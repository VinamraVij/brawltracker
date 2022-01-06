import React,{Component }  from "react";
import { withRouter } from "react-router-dom";
import PlayerProfileCentre from "../PlayerProfileCentre";
import BattleLog from "./BattleLog";

class BattleLogs extends Component{
    componentDidMount(){
        console.log(this.props);
        this.props.location.state.playerBattleData.items.map((item)=>{
            console.log(item.battleTime);
        });
    }

    render(){
        return (
         <div>
             <PlayerProfileCentre playerData={this.props.location?.state?.playerData } playerBattleData={this.props.location?.state?.playerBattleData}/>
             <div className="battle-logs">
            {this.props.location?.state?.playerBattleData?.items.map((battleLog)=>(
                <BattleLog battleLog={battleLog}/>
            ))}
            </div>
        </div>

        )

        
    }
}

export default withRouter(BattleLogs);