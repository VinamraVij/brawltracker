import Avatar from "antd/lib/avatar/avatar";
import React,{Component} from "react";
import BrawlerGadget from "./BrawlerGadget";
import BrawlerStarPower from "./BrawlerStarPower";
import axios from "axios";
import { brawlerContext } from "../BrawlerContext";

class Brawler extends Component{
    constructor(props){
        super(props);
        this.state={
            rarity: ""
        }
        

    }
    
    // componentDidMount(){
    //     if(this.props.brawler.id!=16000048)
    //     {
    //     this.getBrawlerRarity().then(response=>{
    //         console.log("My promise response")
    //         console.log(response)
    //         this.setState({
    //             rarity: response
    //         })
    //     }).catch(error=>{
    //         console.log("Unable to set state");
    //         console.log(error)    
    //     });
        
    //     }
    // }
    
    getBrawler=(response)=>{
        
        let backgroundColor="";
        for(let i=0;i<=response?.state?.brawlers?.length;i++)
        {
           
            if(this.props.brawler.id==response?.state?.brawlers[i]?.id)
            {
                backgroundColor=response?.state?.brawlers[i]?.rarity?.color;
                
                break;
            }
        }
        return backgroundColor;

        // let _brawlersArr = Object.assign([],response.state?.brawlers);
        // let _brawlerId = this.props?.brawler?.id;

        // let _bIndex = _brawlersArr.findIndex(item=>{
        //     if(item.id === _brawlerId){
        //         return 1;
        //     }
        // })

        // if(_bIndex >=0 ){
        //     //there is a brawler in the array            
        //     return _brawlersArr[_bIndex]?.rarity?.color
        // }else{
        //     return null;
        // }

    }

    render(){
        
        const brawlerImage="https://cdn.brawlstats.com/character-arts/"+this.props.brawler.id+".png";
        return(
            <brawlerContext.Consumer>
            {(response)=>{
                
                let _bColor = this.getBrawler(response);
                if(_bColor=="#f88f25"){
                    _bColor="url(https://brawlstats.com/dist/chromatic.bfc17812b0abfed1239f7abadc39f69c.svg)"
                }   
                            
                return(
                    <div className="player-brawler" style={{overflow:"hidden",backgroundColor: _bColor || "#000000", backgroundImage:_bColor }} >
                <div className="player-brawler-name">{this.props.brawler.name}</div>
                <img src={brawlerImage} style={{width:"155px",height:"118px"}}/>
                <div align="right" className="player-brawler-gadgets">
                    {this.props.brawler.gadgets.map((gadget)=>(
                        <BrawlerGadget key={gadget.id} gadget={gadget}></BrawlerGadget>
                    ))}
                    {this.props.brawler.starPowers.map((starPower)=>(
                        <BrawlerStarPower key={starPower.id} starPower={starPower}></BrawlerStarPower>
                    ))}
                </div>

                <div style={{backgroundColor:"black", height:"40px"}} className="brawler-level-stats">
                    <Avatar 
                    src="	https://brawlstats.com/dist/power.a9bd30e35c06d6f164125e4a2f0bb9a7.svg" 
                    size={"small"}
                    style={{marginLeft:"30px"}}/>
                    <label>{this.props.brawler.power}</label>
                    <Avatar 
                    src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png" 
                    size={"small"}
                    style={{marginLeft:"20px"}}/>
                    <label>{this.props.brawler.trophies}</label>
                    <Avatar 
                    src="https://brawlstats.com/dist/trophy.96ebb0874d0e7e7a7c235bfbb751f2cf.png" 
                    size={"small"}
                    style={{marginLeft:"20px"}}/>
                    <label>{this.props.brawler.highestTrophies}</label>
                    
                </div>
            </div>
                )
            }}
            
            </brawlerContext.Consumer>
        )
    }
}
export default Brawler;