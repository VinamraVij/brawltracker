import Avatar from "antd/lib/avatar/avatar";
import { Button } from "antd/lib/radio";
import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import { getPlayerBattleLog, getPlayerData } from "../ApiActions";
import { IconContext } from "../IconContext";
import Members from "./Members";


class Member extends Component{

    constructor(props){
        super(props);
        this.state={
            playerTag: props.member?.tag.substring(1),
            displayLoading: false
        }
        console.log(this.state)

    }

    onSearchPress = async ()=>{
        this.setState({displayLoading: true})
        let _playerData = await getPlayerData(this.state.playerTag);
      
        this.setState({displayLoading : false})
        //TODO: Take the user to the next screen of player profile with the data
        getPlayerBattleLog(_playerData.tag?.substring(1))
        .then(response=>{
          console.log(response.data);
          this.props.history.push("/playerProfile", {
            playerData: _playerData,
            playerBattleData :response.data
        });
        }).catch(error=>{
          console.log(error);
          
        })
        console.log("The data:::");
        console.log(_playerData);
        
      }

      renderLoading(){
          if(this.state.displayLoading===true)
          {
              return(
                <div className="member-loading">

                </div>
              )
          }
      }
    render(){
        
        return(
                    
                        <div className="club-member" onClick={this.onSearchPress}>
                            <div className="member-name">
                            {this.props.member?.name}
                            </div>
                            <img src={this.props.icons?.player?.[this.props.member?.icon?.id]?.imageUrl}></img>
                            <div className="member-role">
                                {this.props.member?.role?.toUpperCase()}
                            </div>
                            <div className="member-trophies">
                                <Avatar size="small" src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"></Avatar>
                                {this.props.member?.trophies}
                            </div>
                            {this.renderLoading()}
                        </div>
                        
                    
                
        )
    }
}

export default withRouter(Member);