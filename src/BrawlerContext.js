import React, {createContext} from 'react';

export const brawlerContext = createContext({});

class BrawlerStateContext extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            brawlers: []
        }
    }


    updateBrawlers = (brawlersList)=>{
        this.setState({
            brawlers: brawlersList
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

export default BrawlerStateContext;