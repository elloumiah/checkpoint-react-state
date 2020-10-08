import React from "react";
import "./App.css";
import PortImage from "./Assets/ahmed.jpg";
// import Changevalue from "./value"
// import Button from "react-bootstrap/Button";
// import ToggleButton from "react-bootstrap/ToggleButton";

class App extends React.Component {
  state = {
    fullname: "Ahmed elloumi",
    bio: "Go my code student",
    img: PortImage,
    show: false,
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  myTimer = () => {
    var k = new Date();
    var l = k.toLocaleTimeString();
    document.getElementById("settime").innerHTML = l;
  };
  componentDidMount = () => {
    var myVar = setInterval(this.myTimer, 1000);
    return myVar;
  };
  render() {
    return (
      <div className="App">
        <div>
          <span id="settime">time when started</span>
        </div>

        <button onClick={this.handleClick}>Toggle</button>
        {this.state.show === true ? (
          <div>
            <h1>{this.state.fullname}</h1>
            <span>{this.state.bio}</span>
            <div>
            <img src={this.state.img} alt="PortImage" width='200'  />
            </div>
            
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
