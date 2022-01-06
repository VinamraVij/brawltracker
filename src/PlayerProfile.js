import React from 'react';
import PlayerProfileCentre from './PlayerProfileComponents/PlayerProfileCentre';
import {withRouter} from 'react-router-dom';
import PlayerProfileGameModes from './PlayerProfileComponents/playerProfileGameModes';
import Brawlers from './PlayerProfileComponents/Brawlers';
import { brawlerContext } from './BrawlerContext';

class PlayerProfile extends React.Component{

    constructor(props){
        super(props);
        console.log("The props:::");
        console.log(this.props)
        this.state=  {
            playerData : this.props.location?.state?.playerData,
            playerBattleData: this.props.location?.state.playerBattleData
        }
        
        
    }
    componentDidMount(){
        
        this.setState({
            playerData: this.props.location?.state?.playerData,
            playerBattleData: this.props.location?.state.playerBattleData
        })
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        
        if(this.props.location?.state?.playerData?.tag != this.state?.playerData?.tag){
            this.setState({
                playerData: this.props.location?.state?.playerData,
                playerBattleData: this.props.location?.state?.playerBattleData
            })
        }
    }

    render(){
        
        return(
            <div >
                
                <PlayerProfileCentre playerData={this.state.playerData} playerBattleData={this.state.playerBattleData}></PlayerProfileCentre>
                <PlayerProfileGameModes playerData={this.state.playerData}></PlayerProfileGameModes>
                <Brawlers playerData={this.state.playerData}></Brawlers> 
            </div>
        )
    }
}

export default withRouter(PlayerProfile)