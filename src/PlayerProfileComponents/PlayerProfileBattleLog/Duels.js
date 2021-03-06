import React,{Component} from "react";
import BattleInfoDiv from "../playerBattleComponents/BattleInfoDiv";

class Duels extends Component{
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
        const img="https://cdn.brawlstats.com/event-icons/event_mode_siege.png"
        
        return(
            <div>
            <BattleInfoDiv battleLog={this.props.battleLog} brawler={this.props.brawler} img={img}></BattleInfoDiv>
            <div align="left" className="player-battle-teams">
                <div className="player-battle-team1">
                    {this.props.battleLog?.battle?.players[0]?.brawlers.map(brawler=>(
                        <div className="player-battle-team1-player">
                            <div className="player-battle-team1-image" 
                            style={{backgroundImage: "url(https://cdn.brawlstats.com/player-thumbnails/"+this.getPlayerAvtarId(brawler.id)+".png)"}}>
                                <div className="battle-log-avatar-trophies" align="left"><img src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"
                                  style={{height:"15px"}}/>
                                 {brawler.trophies}
                                 </div>
                                 <div className="battle-log-avatar-lvl">
                                Power {brawler.power}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    <div style={{backgroundImage: "url(https://brawlstats.com/dist/versus.a7cedf31960214342468b2da5f647781.png)"}} className="Vs-image"></div>
                        <label style={{display:"block", fontSize:"25px"}}>{this.props.battleLog?.battle?.players[0]?.name}</label>
                </div>

                <div className="player-battle-team2">
                    {this.props.battleLog?.battle?.players[1]?.brawlers.map(brawler=>(
                        <div className="player-battle-team1-player">
                            <div className="player-battle-team1-image" 
                            style={{backgroundImage: "url(https://cdn.brawlstats.com/player-thumbnails/"+this.getPlayerAvtarId(brawler.id)+".png)"}}>
                                <div className="battle-log-avatar-trophies" align="left"><img src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"
                                  style={{height:"15px"}}/>
                                 {brawler.trophies}
                                 </div>
                                 <div className="battle-log-avatar-lvl">
                                Power {brawler.power}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    
                        <label style={{display:"block", fontSize:"25px"}}>{this.props.battleLog?.battle?.players[1]?.name}</label>
                </div>

            </div>
            </div>
        )
    }
    
}
export default Duels;