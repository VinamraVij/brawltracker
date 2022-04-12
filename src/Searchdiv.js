import React, { Component } from "react";
import { Button, Tooltip, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Search from "antd/lib/input/Search";
import {
  getPlayerData,
  getAllBrawlersData,
  getPlayerBattleLog,
} from "./ApiActions";

import { withRouter } from "react-router-dom";
import BrawlerStateContext, { brawlerContext } from "./BrawlerContext";

class Searchdiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTag: "",
      displayLoading: false,
    };
  }

  componentDidMount() {
    console.log(this.context);
    getAllBrawlersData()
      .then((response) => {
        console.log(response);
        this.context?.actions?.updateBrawlers(response.list);
      })
      .catch((error) => {
        alert(error);
      });
  }

  onSearchPress = async () => {
    this.setState({ displayLoading: true });
    let _playerData = await getPlayerData(this.state.playerTag);

    this.setState({ displayLoading: false });
    //TODO: Take the user to the next screen of player profile with the data
    getPlayerBattleLog(_playerData.tag?.substring(1))
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/playerProfile", {
          playerData: _playerData,
          playerBattleData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Player Id");
      });
    console.log("The data:::");
    console.log(_playerData);
  };

  renderSearchButton() {
    if (!this.state.displayLoading) {
      return (
        <Button
          onClick={this.onSearchPress}
          icon={<SearchOutlined />}
          className="search-mid-div-btn"
        />
      );
    } else {
      return <Spin style={{ marginLeft: 10 }}></Spin>;
    }
  }

  render() {
    return (
      <div className="mid-div">
        <div className="enter-player-tag">Enter Player Tag to track</div>
        <div className="brawl-image-div" />
        <div className="search-mid-div">
          <input
            onFocus={(event) => console.log(event.target)}
            value={this.state.playerTag}
            className="search-mid-div-input"
            onChange={(event) => {
              console.log(event);
              this.setState({
                playerTag: event.target.value,
              });
            }}
            placeholder="#XXXXXXX"
          ></input>

          {this.renderSearchButton()}
        </div>
      </div>
    );
  }
}

Searchdiv.contextType = brawlerContext;

export default withRouter(Searchdiv);
