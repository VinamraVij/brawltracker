import React,{Component} from "react";
import Member from "./Member";

class Members extends Component{
    render()
    {
        return(
            <div className="player-brawlers">
                <label style={{
                    display: "block", 
                color:"black", 
                textAlign:"center", 
                marginBottom:"20px",
                fontSize:"32px"}}>
                    Members({this.props.members?.length}/30)
                    </label>
                    {this.props.members?.map(member=>(
                        <Member member={member} icons={this.props.icons}></Member>
                    ))}
                    
            </div>
        )
    }
}

export default Members;