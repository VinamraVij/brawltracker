import React,{Component} from "react";
import Avatar from "antd/lib/avatar/avatar";

class PlayerProfileGameModes extends Component{
    render(){        
        console.log(this.props.playerData.v);
        return(
            <div className="playerProfile-game-modes">
                <label style={{
                    display: "block", 
                color:"black", 
                textAlign:"center", 
                marginBottom:"20px",
                fontSize:"32px"}}>
                     Player Statistics
                     </label>
                <div className="player-highest-trophies">
                    <Avatar src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png" />
                    Highest Trophies 
                     <label style={{marginLeft: "128px",position:"absolute", marginTop:"5px"}}>
                        {this.props.playerData.highestTrophies}
                    </label>
                    </div>
                <div className="player-3v3">

                    <Avatar src="https://brawlstats.com/dist/3vs3.44a7c5cbb968e04bd46b5db0a98a3af7.png" />
                        3 V 3 Victories
                        <label style={{marginLeft: "150px",position:"absolute",marginTop:"5px"}}>
                        {this.props.playerData["3vs3Victories"]}
                    </label>
                </div>
                <div className="player-highest-trophies">
                    <Avatar src="https://brawlstats.com/dist/event_mode_duo_showdown.e9ddf754c048aa63d14de7ccfd8b6ec7.png" />
                        Duo Victories
                        <label style={{marginLeft: "160px",position:"absolute",marginTop:"5px"}}>
                        {this.props.playerData.duoVictories}
                    </label>
                </div>
                <div className="player-3v3">
                    <Avatar src="https://brawlstats.com/dist/event_mode_showdown.6645d79502821e2d681b6f819a28eb12.png" />
                        Solo Victories
                        <label style={{marginLeft: "155px",position:"absolute",marginTop:"5px"}}>
                        {this.props.playerData.soloVictories}
                    </label>
                    </div>
                <div className="player-highest-trophies" style={{marginLeft: "32%"}}>
                    <Avatar src="https://brawlstats.com/dist/power_play.18249592d2e3bc5df7a763154df148b9.png" />
                    Highest Power Play Points
                    <label style={{marginLeft: "52px",position:"absolute",marginTop:"5px"}}>
                        {this.props.playerData.highestPowerPlayPoints}
                    </label>
                </div>
                
            </div>
        )
    }
}

export default PlayerProfileGameModes;