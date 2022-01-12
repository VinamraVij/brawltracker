import axios from "axios";

const myBrawlKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVjZWRlMGRiLTAzYjEtNDMzYy04NTMyLTc2MGIyZDA0ZDdhYSIsImlhdCI6MTY0MDA2OTU4Nywic3ViIjoiZGV2ZWxvcGVyL2M4MzM2YTgxLWY1ZTgtYWNlNC0xMWUxLTdhNzA2NjA1NzMxMSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTM0LjIwOS4xNDYuMzIiLCIxMTAuMjI2LjIyNy4yMjkiXSwidHlwZSI6ImNsaWVudCJ9XX0.VJF5n8KSzzN6N8QkZBrfC8NUGeJOk3R7U-iDhFzyqGOZArOMSMGM97TmQ4bUFhIG9QTBVbxsaZVytQS8MqSznw";

export async function getPlayerData(playerId){    
    let _playerUrl = "https://api.brawlstars.com/v1/players/%23"+playerId;
    let _response = await axios.post("http://www.maxscriptstechnologies.com:4005/" , {
        url: _playerUrl,
        method: "GET",
        headers: {
            "Authorization" : "Bearer "+myBrawlKey 
        }
    }).then(response=>{ 
        return response.data
    }).catch(error=>{        
        return error
    })    
    return _response
}

export function getAllBrawlersData(){
    return new Promise((resolve,reject)=>{
        axios.get("https://api.brawlapi.com/v1/brawlers")
        .then(response=>{
             resolve(response.data)
        })
        .catch(error=>{
            reject(error);
        })
    })

}

export function getPlayerBattleLog(playerId) {

    return new Promise((resolve,reject)=>{
        let _playerUrl = "https://api.brawlstars.com/v1/players/%23"+playerId+"/battlelog";
        axios.post("http://www.maxscriptstechnologies.com:4005/" , {
        url: _playerUrl,
        method: "GET",
        headers: {
            "Authorization" : "Bearer "+myBrawlKey 
        }
    }).then(response=>{
        console.log("here getting battle")
        console.log(response.data)
        resolve(response);
    }).catch(error=>{
        console.log("Cannot get player Battle data")
        reject(error);
    })
    })
    
}

export function getClubInfo(clubId){
    return new Promise((resolve,reject)=>{
        let _clanUrl="https://api.brawlstars.com/v1/clubs/%23"+clubId;
        console.log(_clanUrl);
        axios.post("http://www.maxscriptstechnologies.com:4005/" , {
        url: _clanUrl,
        method: "GET",
        headers: {
            "Authorization" : "Bearer "+myBrawlKey 
        }
    }).then(response=>{
        resolve(response.data);
    }).catch(error=>{
        console.log(error)
        reject(error);
    })
    })
}

export function getIcons(){
    return new Promise((resolve,reject)=>{
        let url="https://api.brawlapi.com/v1/icons"
        axios.post("http://www.maxscriptstechnologies.com:4005/" , {
        url: url,
        method: "GET",
        headers: {
            "Authorization" : "Bearer "+myBrawlKey 
        }
    }).then(response=>{
        resolve(response.data);
    }).catch(error=>{
        console.log(error)
        reject(error);
    })
    })
    
}