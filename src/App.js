import React, { Component } from "react";
import axios from "axios";
import "./App.css"

export class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchadvice();
  }

  fetchadvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {

        const { advice } = response.data.slip;
        this.setState({advice});
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { advice } = this.state;
    return <div className="app">
      <div className="card"><h2>{advice}</h2>
      <button onClick={()=>this.fetchadvice()} className="button"><span>NEW ADVICE</span></button></div>
      </div>;
  }
}

export default App;
