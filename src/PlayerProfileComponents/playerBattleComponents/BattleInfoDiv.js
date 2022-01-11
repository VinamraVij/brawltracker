import React,{Component} from "react";

class BattleInfoDiv extends Component{

    renderRank(){
        if(this.props.battleLog?.battle?.mode==="duoShowdown"||this.props.battleLog?.battle?.mode==="soloShowdown"){
            if(this.props.battleLog?.battle?.trophyChange>0){
                return <label>VICTORY</label>
            }
            else if(this.props.battleLog?.battle?.trophyChange==0){
                return <label>DRAW</label>
            }
            else{
                return <label>DEFEAT</label>
            }
        }
        else{
            return <label>{this.props.battleLog?.battle?.result?.toUpperCase()}</label>
        }
    }

    render(){
       
        let _color="white";
        if(this.props.battleLog?.battle?.result==='defeat')
        {
            _color="red";
        }
        else if(this.props.battleLog?.battle?.result==="victory")
        {
            _color="lime";
        }
        return(
            <div align="left" className="battle-log-info">
                <div align="left" className="battle-log-info-map" >
                    <img src={this.props.img} className="battle-log-info-battle-logo"></img>
                    <label>{this.props.battleLog?.event?.map}</label>
                </div>
                <div className="battle-log-info-status" style={{color:_color}}>
                    {this.renderRank()}
                </div>
                <div className="battle-log-info-trophy">
                    <label>{this.props.battleLog?.battle?.trophyChange}</label>
                </div>
            </div>
        )
    }
}
export default BattleInfoDiv;