import React, {createContext,Component} from "react";
import { getIcons } from "./ApiActions";


export const IconContext= createContext({});

class IconStateContext extends Component{
    constructor(props){
        super(props);
        console.log("inside Icon State Context");
        this.state={
            icons: []
        }
    }

    updateIcons=(iconList)=>{
        this.setState({
            icons:iconList
        })
    }

    componentDidMount(){
        getIcons()
        .then(response=>{
            console.log(response);
            this.updateIcons(response);
        })
        .catch(error=>{
            alert(error);
        })
    }

    render(){
        return(
            <IconContext.Provider value = {{
                state: this.state,
                actions:{
                    updateIcons: this.updateIcons
                }
            }}>

                {this.props.children}
            </IconContext.Provider>
        )
    }
    
}