import React, { Component } from 'react';

class Game extends Component {
  // Setting this.state.score to the score json array
  state = {
    score: 0,
    topScore: 0,
    click: false,
    image: ""
  }

  handleBtnClick = event => {

  };

  increaseScore  = () => {
      this.setState({ score: this.state.count + 1 });
    };

  setTopScore  = () => {
      this.setState({ score: this.state.count + 1 });
    };

  

  render() {
    return (
  	<div className="game-containter">
  		<h1>GAME IMAGES GO HERE</h1>
  	</div>
    );
  }
}
export default Game;

