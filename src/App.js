import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Wrapper from "./Wrapper";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import characters from "./characters.json";
import "./App.css";
import SweetAlert from 'react-bootstrap-sweetalert';
// import Modal from "./Modal";


class App extends Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

  handleClick = id => {
    this.setState({ alert: this.getAlertNotes() })
    this.shuffleArray();
    this.handleScore(id);
  };

  getAlertNotes = (actor, notes) => (
    < SweetAlert
      hideOverlay
      title="More info" info
      onConfirm={() => this.hideAlert()}
    >
      <p>{notes}</p>

      <p>Played by {actor}</p>

    </SweetAlert >

  )

  // getAlertWrong = () => (
  //   < SweetAlert
  //     hideOverlay
  //     warning
  //     title="Oh No!"
  //     onConfirm={() => this.hideAlert()}
  //   >
  //     You clicked this one already!<br/>
  //     Your high score is " {this.state.currentScore}
  //   </SweetAlert >
  // )

  getAlertNotMax = () => (
    < SweetAlert
      hideOverlay
      success
      title="Good job..."
      onConfirm={() => this.hideAlert()}
    >
      You have achieved a new high score of {this.state.currentScore}, but you did not achieve max score of {this.state.characters.length}. Try again...
    </SweetAlert >
  )

  getAlertMax = () => (
    < SweetAlert
      hideOverlay
      success
      title="Congratulations!"
      onConfirm={() => this.hideAlert()}
    >
      You have mastered this game with the max score of {this.state.characters.length}
    </SweetAlert >
  )

  getAlertTryAgain = () => (
    < SweetAlert
      hideOverlay
      success
      title="Okay"
      onConfirm={() => this.hideAlert()}
    >
      Your score was {this.state.currentScore} which failed to beat the previous high score. Please try again.
    </SweetAlert >
  )

  hideAlert() {
    console.log("hiding alert")
    this.setState({
      alert: null
    })
  }

  handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        // you got it! This was not clicked before!
        element.clicked = true;
        this.setState({
          alert: this.getAlertNotes(element.actor, element.notes), Clicked: false
        });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        // alert("Oh no! You clicked this one already! Your high score is " + this.state.currentScore)
        // this.setState({
        //   alert: this.getAlertWrong()
        // })
        // // waah waah waah... wrong, sorry!
        // update high score... if it is a high score
        if (this.state.currentScore > this.state.highScore) {
          // alert("You have achieved a new high score, but you did not achieve max score. Try again...")
          this.setState({
            highScore: this.state.currentScore,
            alert: this.getAlertNotMax()
          });
        } else {
          // alert("You have not achieved a new high score. Try again...")
          this.setState({
            alert: this.getAlertTryAgain()
          })
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
    // note, state updates are async, but we can declare victory right here... 
    if ((this.state.currentScore + 1) === this.state.characters.length) {
      // we've reached max score! Record that as the highscore
      this.setState({
        highScore: this.state.characters.length,
        alert: this.getAlertMax()
      });
      // alert(`Congratulations! You have mastered this game with the max score of ${this.state.characters.length}`)
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
            <Col size='xs-12 sm-6 md-4 lg-3' key={"col" + character.id}>
              {this.state.alert}
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