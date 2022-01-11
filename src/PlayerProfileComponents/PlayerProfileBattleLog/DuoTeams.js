import React,{Component} from "react";


class DuoTeams extends Component{

    constructor(props)
    {
        super(props);
        
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

    render(){
        return (
        <div className="duo-showdown-team">
                <label style={{fontSize:"10px"}}>{this.props.team[0].name}</label>
                <div style={{fontSize:"40%",margin:"25px", marginTop:"5px", marginBottom:"0px"}}>
                {this.props.team.map(brawler=>(
                    <div className="player-battle-team1-image" style={{backgroundImage: "url(https://cdn.brawlstats.com/player-thumbnails/"+this.getPlayerAvtarId(brawler.brawler.id)+".png)"}}>
                        <div className="battle-log-avatar-trophies" align="left"><img src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"
                        style={{height:"15px"}}/>
                        {brawler.brawler.trophies}
                        </div>
                        <div className="battle-log-avatar-lvl">
                        Power {brawler.brawler.power}
                        </div>
                    </div>
                ))}
                </div>
                <label style={{fontSize:"10px"}}>{this.props.team[1].name}</label>
                
        </div>
        );
    }
}

export default DuoTeams;