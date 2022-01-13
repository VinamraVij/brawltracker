import React, { Component } from "react";
import { Button, Tooltip, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Search from "antd/lib/input/Search";
import { getPlayerData,getAllBrawlersData, getPlayerBattleLog, getClubInfo } from "./ApiActions";

import {withRouter} from 'react-router-dom';
import BrawlerStateContext, { brawlerContext } from "./BrawlerContext";

class ClanSearchDiv extends Component{

   
    constructor(props){
        super(props);
        this.state = {
            clubTag: '',
            displayClubLoading: false
        }
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
              alert("Invalid Club Id")
          })
          
      }

    renderClubSearchButton(){
        if(!this.state.displayClubLoading){
            return (
                <Button onClick={this.onClubSearchPress} icon={<SearchOutlined />} className="search-mid-div-btn"/>
            )
        }else{            
            return (                
                <Spin style={{marginLeft: 10}}></Spin>                
            )
        }
    }

    render(){
        return(
            <div className="mid-div-club" style={{marginTop:"356px"}}>
                <div className="brawl-image-club"/>
                <div className="enter-player-tag">
                        Enter Club Tag to track
                        
                </div>
                
                <div className="search-mid-div">
                    <input value={this.state.clanTag} className="search-mid-div-input" onChange={(event)=>{
                        this.setState({
                            clubTag: event.target.value
                        })
                    }} placeholder="#XXXXXXX"></input>
                    
                    {this.renderClubSearchButton()}
                   
                </div>
                
                    
                
            </div>
        )
    }
}



export default withRouter(ClanSearchDiv);