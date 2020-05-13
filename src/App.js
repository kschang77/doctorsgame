import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Wrapper from "./Wrapper";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import characters from "./characters.json";
import "./App.css"


class App extends Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
  };

  handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        // you got it! This was not clicked before!
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        // waah waah waah... wrong, sorry!
        // update high score... if it is a high score
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        //reset the rest
        this.resetGame();
      }
    });
  };

  resetGame = () => {
    this.setState({ currentScore: 0 });
    this.setState({ Clicked: true });
    this.state.characters.forEach(element => (element.clicked = false));
  }

  shuffleArray = () => {
    // Shuffle the deck
    const shuffledArr = this.shuffle(this.state.characters);
    // Setting and this is now the "current" state
    this.setState({ shuffledArr });
  };

  // increment store
  handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
    // stop game when score reaches maximum 
    console.log("CurScore = ", this.state.currentScore)
    console.log("MaxScore = ", this.state.characters.length)

    if ((this.state.currentScore + 1) === this.state.characters.length) {
      // we've reached max score! Record that as the highscore
      this.setState({ highScore: this.state.characters.length });
      alert(`Congratulations! You achieved the max possible score of ${this.state.characters.length}`)
      this.resetGame();
    }
  };

  shuffle = array => {
    var currentIndex = array.length,
      tempValue,
      randomIndex;

    // while not done yet...
    while (currentIndex !== 0) {
      // pick one of the remaining ones...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap with current
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <Row>
          {this.state.characters.map(character => (
            <Col size='sm-6 md-4 lg-3' key={"col" + character.id}>
              <CharacterCard
                Clicked={this.state.Clicked}
                handleClick={this.handleClick}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                actor={character.actor}
                notes={character.notes}
              />
            </Col>

          ))
          }
        </Row>
      </Wrapper >
    );
  }
}

export default App;