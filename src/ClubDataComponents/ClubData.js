import React,{Component} from "react";
import { withRouter } from "react-router-dom";

class ClubData extends Component{

    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render()
    {
        return (<div>Hello we are inside Clubs!!!</div>)
    }
}


export default withRouter(ClubData);