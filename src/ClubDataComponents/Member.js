import Avatar from "antd/lib/avatar/avatar";
import React,{Component} from "react";
import { IconContext } from "../IconContext";
import Members from "./Members";


class Member extends Component{
    render(){
        console.log(this.props)
        return(
            
                        <div className="club-member">
                            <div className="member-name">
                            {this.props.member?.name}
                            </div>
                            <img src={this.props.icons?.player?.[this.props.member?.icon?.id]?.imageUrl}></img>
                            <div className="member-role">
                                {this.props.member?.role?.toUpperCase()}
                            </div>
                            <div className="member-trophies">
                                <Avatar size="small" src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png"></Avatar>
                                {this.props.member?.trophies}
                            </div>
                        </div>
                    
                
        )
    }
}

export default Member;