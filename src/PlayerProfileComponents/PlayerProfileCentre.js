import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React,{Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { getClubInfo, getPlayerBattleLog } from "../ApiActions";




class PlayerProfileCentre extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            myExpCalculations: null,
            clubTag: this.props.playerData?.club?.tag.substring(1),
            displayClubLoading: false
        }
        console.log(this.state)
    }

    componentDidMount(){
        this.playerPointCalculation().then(response=>{            
            this.setState({
                myExpCalculations: response
            })
        }).catch(error=>{
            alert(error);
        })
    }
    

    playerPointCalculation=()=>{
        return new Promise( (resolve, reject) =>{
            try{
                let expPoints=this.props.playerData.expPoints;
                let expLevel=this.props.playerData.expLevel-1;
                let n=1;
                let totalNextExp=40;
                while(n!=expLevel)
                {
                    totalNextExp=totalNextExp+(10*n)+40;
                    n++;
                }
                let nextExp=40+10*(expLevel);
                let currentExp=expPoints-totalNextExp;
                let highestTrophies= this.props.playerData.highestTrophies;
                let nextLeaugeTrophies=0;
                while(nextLeaugeTrophies<highestTrophies)
                {
                    nextLeaugeTrophies=nextLeaugeTrophies+500;
                }               
                resolve({
                    nextExp,
                    currentExp,
                    expPoints,
                    highestTrophies,
                    nextLeaugeTrophies
                })
            }catch(error){
                reject("Unable to calculate the exps")
            }           
        })
       
        

    }

    onClubSearchPress=()=>{
        this.setState({displayClubLoading:true})
        getClubInfo(this.state.clubTag)
        .then(response=>{
          this.setState({displayClubLoading:false})
          this.props.history.push("/ClubData",{clubData: response})
        })
        .catch(error=>{
          this.setState({displayClubLoading:false})
            console.log(error);
            
        })
        
    }

    onPlayerBattleLogPress=()=>{
        this.props.history.push("/playerBattles",{
            playerData: this.props.playerData,
            playerBattleData: this.props.playerBattleData
        })
    }

    onPlayerStatisticsPress=()=>{
        this.props.history.push("/playerProfile", {
            playerData: this.props.playerData,
            playerBattleData: this.props.playerBattleData
        })
    }
    

    render(){
        const playerIcon="https://cdn.brawlstats.com/player-thumbnails/"+this.props?.playerData?.icon?.id+".png";
        let _exps = this.state.myExpCalculations;
        
        const expirienceWidth=((_exps?.currentExp/_exps?.nextExp)*118)+"px";
        

        return(
            <div className="mid-div">
                <div className="mid-div-player-tag">
                    {this.props.playerData.tag}
                </div>
                <div style={{position: "absolute", marginLeft: "150px", marginTop: "10px"}}>{this.props.playerData.name}</div>
                <div  style={{position: "absolute", marginLeft: "150px", marginTop: "40px"}} className="player-profile-center-clubname" onClick={this.onClubSearchPress}>
                    {this.props.playerData.club.name}
                    </div>
                    <img src={playerIcon} className="mid-div-playerIcon" style={{display: "block"}}></img>
                    <div className="player-profile-center-buttons">
                    <Button type="link" style={{color: "white"}} onClick={this.onPlayerBattleLogPress}><u>Player Battles</u></Button>
                    <Button type="link" style={{color: "white"}} onClick={this.onPlayerStatisticsPress}><u>Player Statistics</u></Button>
                    </div>
                <div>
                <div className="brawl-image-div" style={{top: "0%"}}/>
                    
                        <div className="playerProfile-progress-bar-expirience">
                            <div className="playerProfile-progress-expirience"  style={{width: expirienceWidth}}>
                            <div className="playerProfile-progress-numbers">{_exps?.currentExp}/{_exps?.nextExp}</div>
                            </div>
                            
                            <div className="playerProfile-progress-bar-expirience-icon">{this.props.playerData.expLevel}</div>
                            
                        </div>
                        <div className="playerProfile-progress-bar-trophies">
                            <div className="playerProfile-progress-trophies"  style={{width: expirienceWidth}}>
                                <div className="playerProfile-progress-numbers">{this.props.playerData.trophies}/{_exps?.nextLeaugeTrophies}</div>
                            </div>
                            
                            <div className="playerProfile-progress-bar-trophies-icon"></div>
                        </div>
                </div>
            </div>
        )
    }
}
export default withRouter(PlayerProfileCentre);