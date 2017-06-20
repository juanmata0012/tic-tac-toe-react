import React, { Component } from 'react';
import Board from './Board';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      playerTurn: "x",
    }
  }
  boardHandler = (squareProps) => {
    console.log(squareProps);
    let { row, column } = squareProps;
    const { board, playerTurn } = this.state;
    // generate a new version of the board
    const newBoard = board.map((stateRow, i) => {
      if (i === row) {
        stateRow.map((stateColumn, j) => {
          if (j === column) {
            stateRow[j] = playerTurn;
          }
          return stateColumn;
        })
      }
      return stateRow;
    })
    // toggle playerTurn
    this.toggleTurn();
    // set the state to that new version of the board
    this.setState({ board: newBoard });
  }
  toggleTurn = () => {
    const { playerTurn } = this.state;
    const toggle = playerTurn === "o" ? "x" : "o";
    console.log(toggle);
    this.setState({ playerTurn: toggle })
  }
  checkForWin = () => {
    //do stuff
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Board board={this.state.board} handleBoardClick={(squareProps) => this.boardHandler(squareProps)} />
        </div>
      </div>
    );
  }
}

export default App;
