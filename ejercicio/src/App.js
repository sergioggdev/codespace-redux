import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Provider } from "react-redux";
import { store } from "./models/store/store";
import { getPing, getPong } from "./models/actions/firstAction";

import "./index.css";

class App extends Component {
  haddlePing = () => {
    this.props.getPing("pelota");
    this.props.getPong("-");
  };

  haddlePong = () => {
    this.props.getPong("pelota");
    this.props.getPing("-");
  };

  render() {
    console.log(store.getState());
    return (
      <div className="container">
        <div>
          <h1>Ping</h1>
          <p>{this.props.ping}</p>
          <a onClick={this.haddlePing}>Click</a>
        </div>
        <div>
          <h1>Pong</h1>
          <p>{this.props.pong}</p>
          <a onClick={this.haddlePong}>Click</a>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = state => ({
  ping: state.ping,
  pong: state.pong
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPing, getPong }, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(App);
