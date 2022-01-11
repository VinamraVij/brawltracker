import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class SoloShowdown extends Component{

constructor(props){
    super(props);
    console.log(props);
}
getPlayerAvtarId(id){
    let b=28000005;
    for(let i=0;i<this.props.brawler?.state?.brawlers.length;i++)
    {
        
        if(id===this.props.brawler?.state?.brawlers[i].id)
        {
            b=this.props.brawler?.state?.brawlers[i].avatarId;
        }
        
    }
    return b;
    
}
    render()
    {
        const img="https://cdn.brawlstats.com/event-icons/event_mode_showdown.png"
        
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            {this.props.battleLog.battle.players.map(player=>(
                <div className="player-battle-team1-player" >
                <div className="player-battle-team1-image" style={{backgroundImage: "url(https://cdn.brawlstats.com/player-thumbnails/"+this.getPlayerAvtarId(player.brawler.id)+".png)"}}>
                    <div className="battle-log-avatar-trophies" align="left"><img src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"
                     style={{height:"15px"}}/>
                    {player.brawler.trophies}
                    </div>
                    <div className="battle-log-avatar-lvl">
                   Power {player.brawler.power}
               </div>
                </div>
                <label >{player.name}</label>
           </div>
            ))}
            </div>
        )
    }
    
}
export default SoloShowdown;