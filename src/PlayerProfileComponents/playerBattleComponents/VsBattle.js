import React,{Component} from "react";

class VsBattle extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
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

    isStarPlayer(tag){
        if(tag===this.props.battleLog?.battle?.starPlayer?.tag)
        {
            return "orange";
        }
        else
        {
        return "none"
        }
    }

    render(){
        return(
            <div align="left" className="player-battle-teams">
                <div className="player-battle-team1">
                    {this.props.battleLog?.battle?.teams[0].map(player=>(
                         <div className="player-battle-team1-player" style={{backgroundColor: this.isStarPlayer(player.tag)}}>
                             <div className="player-battle-team1-image" style={{backgroundImage: "url(https://cdn.brawlstats.com/player-thumbnails/"+this.getPlayerAvtarId(player.brawler.id)+".png)"}}>
                                 <div className="battle-log-avatar-trophies" align="left"><img src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"
                                  style={{height:"15px"}}/>
                                 {player.brawler.trophies}
                                 </div>
                                 <div className="battle-log-avatar-lvl">
                                Power {player.brawler.power}
                            </div>
                             </div>
                             <label style={{backgroundColor: this.isStarPlayer(player.tag)}}>{player.name}</label>
                        </div>
                    ))}
                   
                </div>
                <div style={{backgroundImage: "url(https://brawlstats.com/dist/versus.a7cedf31960214342468b2da5f647781.png)"}} className="Vs-image"></div>
                
                <div className="player-battle-team2" >
                    {this.props.battleLog?.battle?.teams[1].map(player=>(
                         <div className="player-battle-team1-player" style={{backgroundColor: this.isStarPlayer(player.tag)}}>
                             <div className="player-battle-team1-image" style={{backgroundImage: "url(https://cdn.brawlstats.com/player-thumbnails/"+this.getPlayerAvtarId(player.brawler.id)+".png)"}}>
                             <div className="battle-log-avatar-trophies" align="left"><img src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"
                                  style={{height:"15px"}}/>
                                 {player.brawler.trophies}
                                 </div>
                            <div className="battle-log-avatar-lvl">
                                Power {player.brawler.power}
                            </div>
                                
                            </div>

                             <label style={{backgroundColor: this.isStarPlayer(player.tag)}}>{player.name}</label>

                        </div>

                    ))}
                   
                </div>

            </div>
        )
    }
}

export default VsBattle;