import React, { Component } from "react";
import "./stylesheets/LightsOut.css";

class LightsOut extends Component {
  constructor(props) {
    super(props);
    this.gridDim = props.gridDim;
    this.numBoxesArray = [];
    for (let i = 1; i <= this.gridDim; i++) {
      for (let j = 1; j <= this.gridDim; j++) {
        this.numBoxesArray.push([i, j]);
      }
    }

    this.state = {
      status: this.numBoxesArray.map((num) => {
        return {
          pos: num.join(""),
          on: Math.random() > props.prob ? false : true,
        };
      }),
      win: false,
    };
  }

  changeColor = (e) => {
    const clickedRow = parseInt(e.target.getAttribute("data-row"));
    const clickedColumn = parseInt(e.target.getAttribute("data-column"));
    const newStatus = [...this.state.status];
    let index1 = newStatus.findIndex((element) => {
      return element.pos === `${clickedRow}${clickedColumn}`;
    });
    let index2 = newStatus.findIndex((element) => {
      return element.pos === `${clickedRow + 1}${clickedColumn}`;
    });
    let index3 = newStatus.findIndex((element) => {
      return element.pos === `${clickedRow - 1}${clickedColumn}`;
    });
    let index4 = newStatus.findIndex((element) => {
      return element.pos === `${clickedRow}${clickedColumn + 1}`;
    });
    let index5 = newStatus.findIndex((element) => {
      return element.pos === `${clickedRow}${clickedColumn - 1}`;
    });
    if (index1 >= 0) {
      newStatus[index1].on === true
        ? (newStatus[index1].on = false)
        : (newStatus[index1].on = true);
    }

    if (index2 >= 0) {
      newStatus[index2].on === true
        ? (newStatus[index2].on = false)
        : (newStatus[index2].on = true);
    }

    if (index3 >= 0) {
      newStatus[index3].on === true
        ? (newStatus[index3].on = false)
        : (newStatus[index3].on = true);
    }

    if (index4 >= 0) {
      newStatus[index4].on === true
        ? (newStatus[index4].on = false)
        : (newStatus[index4].on = true);
    }

    if (index5 >= 0) {
      newStatus[index5].on === true
        ? (newStatus[index5].on = false)
        : (newStatus[index5].on = true);
    }
    if (
      newStatus.every((ele) => {
        return ele.on === false;
      })
    ) {
      this.setState({
        win: true,
        status: newStatus,
      });
    } else {
      this.setState({
        status: newStatus,
      });
    }
  };
  newPuzzle = () => {
    this.setState({
      status: this.numBoxesArray.map((num) => {
        return {
          pos: num.join(""),
          on: Math.random() > this.props.prob ? false : true,
        };
      }),
      win: false,
    });
  };
  render() {
    return (
      <div className="LightsOut">
        <h1 className="LightsOut-Header">Lights Out</h1>
        <div className="LightsOut-Boxes">
          {this.numBoxesArray.map((num, index) => {
            return (
              <div
                className={
                  this.state.status[index].on
                    ? "LightsOut-Box LightsOut-On"
                    : "LightsOut-Box LightsOut-Off"
                }
                style={{
                  gridRow: num[0],
                  gridColumn: num[1],
                  height: 80 / this.gridDim + "vmin",
                  width: 80 / this.gridDim + "vmin",
                }}
                key={index}
                data-row={num[0]}
                data-column={num[1]}
                data-index={index}
                onClick={this.changeColor}
              ></div>
            );
          })}
        </div>
        {this.state.win ? <h1>You Win!</h1> : null}
        <button onClick={this.newPuzzle} className="LightsOut-Button">
          Refresh Boxes?
        </button>
      </div>
    );
  }
}

export default LightsOut;
