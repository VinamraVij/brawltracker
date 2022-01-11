import {Button, PageHeader, Input, Avatar, Menu, Dropdown,message,Space,Tooltip} from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import { getPlayerData,getAllBrawlersData, getPlayerBattleLog } from "./ApiActions";
import {Link, withRouter} from 'react-router-dom';

import { Component } from "react";

const { Search } = Input;
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" >
        Trophies
      </Menu.Item>
      <Menu.Item key="2" >
       Clubs
      </Menu.Item>
      <Menu.Item key="3" >
        Power Play
      </Menu.Item>
    </Menu>
  );
  function handleButtonClick(e) {
    message.info('Click on left button.');
    
  }
  
  function handleMenuClick(e) {
    
    
  }
class Pagehead extends Component{
  constructor(props){
    super(props);
    this.state = {
        playerTag: '',
        displayLoading: false,
    
    }
}



    onSearchPress = async ()=>{
      this.setState({displayLoading: true})
      let _playerData = await getPlayerData(this.state.playerTag);
    
      this.setState({displayLoading : false})
      //TODO: Take the user to the next screen of player profile with the data
      getPlayerBattleLog(_playerData.tag.substring(1))
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
    
  
    render(){
        return(
            <div>
                <PageHeader ghost={false} tags = {[
          <Button  type = "link"><Avatar size="small" src="https://brawlstats.com/dist/profile.84f43945bf382dc3495a34dd8b0e149b.png"></Avatar>Players</Button>,
          <Button  type = "link"><Avatar size="small" src="https://brawlstats.com/dist/events.c79483a1351d147269d5eaee4136ca3b.png"/>Events</Button>,
          <Button  type = "link"><Avatar size="small" src="https://brawlstats.com/dist/wiki.63f7bc9c97fd3328b709f93fd56be5b2.svg"/>Wiki</Button>,
          <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <Avatar src="https://brawlstats.com/dist/leaderboards.7c00b7bd9da5866dfbdcd98593ee09f7.png"></Avatar>Top <DownOutlined />
    </a>
  </Dropdown>
          
        ]} avatar = {{src: "https://i.pinimg.com/originals/52/56/48/525648ce169fd2b5fae7a06158262af8.png",size: 'large'}} className='app-bar-container'  title = {[<Link to="/" style={{color:"black"}}>Brawl Tracker</Link>]}  extra = {[
         
          <Search placeholder='Player code' onSearch={this.onSearchPress} onChange={(event=>{
            this.setState({
              playerTag: event.target.value
            })
          })} loading={this.state.displayLoading}></Search>
          
        ]}>
          
        </PageHeader>
            </div>
        )
    }
}

export default withRouter(Pagehead);