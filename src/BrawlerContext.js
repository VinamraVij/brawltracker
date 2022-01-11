import React, {createContext} from 'react';
import { getAllBrawlersData } from './ApiActions';

export const brawlerContext = createContext({});

class BrawlerStateContext extends React.Component{ 

    constructor(props){
        super(props);
        console.log("first here")
        this.state = {
            brawlers: []
        }
    }


    updateBrawlers = (brawlersList)=>{
        this.setState({
            brawlers: brawlersList
        })
    }

    componentDidMount(){
        
        getAllBrawlersData()
        .then(response=>{  
            console.log(response)          
            this.updateBrawlers(response.list);
        })
        .catch(error=>{
            alert(error);
        })
    }

    render(){
        return (
        <brawlerContext.Provider value = {{
                state: this.state, 
                actions:{
                    updateBrawlers: this.updateBrawlers
            }
        }}>
            {this.props.children}
        </brawlerContext.Provider>
        )
    }

}
BrawlerStateContext.contextType=brawlerContext
export default BrawlerStateContext;