import Avatar from "antd/lib/avatar/avatar";
import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import IconStateContext, { IconContext } from "../IconContext";
import Members from "./Members";

class ClubData extends Component{

    constructor(props)
    {
        super(props);
        
        console.log(props);
        
        
    }

    getClubIconType(){
        if(this.props.location?.state?.clubData?.type==='closed')
        {
            return "https://brawlstats.com/dist/bssb_lock_locked.48c7f4ee8aa03e7c68753d9534247063.png"
        }
        else if(this.props.location?.state?.clubData?.type==='open')
        {
            return "https://brawlstats.com/dist/bssb_lock_open.4ca3f106b4a181a75e5a9a8e4e327112.png"
        }
        else{
            return "https://brawlstats.com/dist/bssb_lock_invite.06997caff15411f704c194b2df48c5ba.png"
        }
    }

    render()
    {
        return (
        
        <IconContext.Consumer>
            {(response)=>{
                {console.log(response)}    
        return(
        <div>
            <div className="mid-div">
            <img src={response?.state?.icons?.club?.[this.props.location?.state?.clubData?.badgeId]?.imageUrl} className="club-badge">

            </img>

            <div className="mid-div-club-tag">
                {this.props.location?.state?.clubData?.tag}
            </div>
            <div className="mid-div-club-name">
            {this.props.location?.state?.clubData?.name}
            </div>
            <div className="mid-div-club-description">
            "{this.props.location?.state?.clubData?.description}"
            </div>

            </div>
            <div className="playerProfile-game-modes">
            <label style={{display:"block", color:"black",textAlign:"center",marginBottom:"20px", fontSize:"32px"}}>
                Club Statistics
            </label>
            <div className="player-highest-trophies">
                    <Avatar src="	https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png" />
                        Trophies
                        <label style={{marginLeft: "150px",position:"absolute",marginTop:"5px"}}>
                        {this.props.location?.state?.clubData?.trophies}
                    </label>
                </div>
                <div className="player-3v3">
                    <Avatar src="	https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png" />
                        Required Trophies
                        <label style={{marginLeft: "8%",position:"absolute",marginTop:"5px"}}>
                        {this.props.location?.state?.clubData?.requiredTrophies}
                    </label>
                </div>
                <div className="player-highest-trophies" style={{marginLeft: "32%"}}>
                    <Avatar src={this.getClubIconType()}/>
                    Type
                    <label style={{marginLeft: "18%",position:"absolute",marginTop:"5px"}}>
                    {this.props.location?.state?.clubData?.type}
                    </label>
                </div>
            </div>
            <Members members={this.props.location?.state?.clubData?.members} icons={response.state?.icons}></Members>
        </div>
            )
       
            }}
        </IconContext.Consumer>
        
        
        
        )}
}



export default withRouter(ClubData);