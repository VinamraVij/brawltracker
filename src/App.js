import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Button, PageHeader, Input, Avatar, Menu, Dropdown,message,Space,Tooltip} from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Pagehead from './pagehead';
import Search from 'antd/lib/transfer/search';
import Searchdiv from './Searchdiv';
import Challenge from './challenge';

import PlayerProfile from './PlayerProfile';
import BrawlerStateContext from './BrawlerContext';
import BattleLogs from './PlayerProfileComponents/playerBattleComponents/BattleLogs';
import { getAllBrawlersData } from './ApiActions';


class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.context)
    getAllBrawlersData()
    .then(response=>{  
        console.log(response)          
        this.context?.actions?.updateBrawlers(response.list);
    })
    .catch(error=>{
        alert(error);
    })
}
  
  

  render(){
    const path="/playerProfile"
    return (
      <BrawlerStateContext>
      <div>
        <Router>
        <Pagehead></Pagehead>
          <Switch>
            <Route exact path = "/">
              <Searchdiv></Searchdiv>
            </Route>
                      
            <Route path = {path} >
              <PlayerProfile></PlayerProfile>
                
            </Route>
            <Route path="/playerBattles">
                  <BattleLogs></BattleLogs>
                 </Route>
          </Switch>
        </Router>        
      </div>
      </BrawlerStateContext>
    )
  }

}

export default App;
//https://brawlstats.com/dist/leaderboards.7c00b7bd9da5866dfbdcd98593ee09f7.png