import React from 'react';
import PlayerProfileCentre from './PlayerProfileComponents/PlayerProfileCentre';
import {withRouter} from 'react-router-dom';
import PlayerProfileGameModes from './PlayerProfileComponents/playerProfileGameModes';
import Brawlers from './PlayerProfileComponents/Brawlers';

class PlayerProfile extends React.Component{

    constructor(props){
        super(props);
        console.log("The props:::");
        console.log(this.props)
        this.state=  {
            playerData : this.props.location?.state?.playerData
        }
        
        
    }
    componentDidMount(){
        this.setState({
            playerData: this.props.location?.state?.playerData
        })
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("Component Updated")
        console.log(this.state)
        console.log(this.props)
        if(this.props.location?.state?.playerData?.tag != this.state?.playerData?.tag){
            this.setState({
                playerData: this.props.location?.state?.playerData
            })
        }
    }

    render(){
        
        return(
            <div >
                
                <PlayerProfileCentre playerData={this.state.playerData}></PlayerProfileCentre>
                <PlayerProfileGameModes playerData={this.state.playerData}></PlayerProfileGameModes>
                <Brawlers playerData={this.state.playerData}></Brawlers> 
            </div>
        )
    }
}

export default withRouter(PlayerProfile)