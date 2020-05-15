# Welcome to doctorsgame 👋
![Version](https://img.shields.io/badge/version-0.5.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](insertREADME)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A simple memory game where you click through the choices being careful not repeating yourself. The subject is Star Trek doctors. This is written using React.js, and uses Bootstrap 4 to be responsive and reacts to multiple portal widths. 

### 🏠 [Homepage](https://github.com/kschang77/doctorsgame)

### ✨ [Demo](https://kschang77.github.io/doctorsgame/)

![Doctor\'s Game](doctorsgame.gif)


### Tools Used

* React.js
* Bootstrap 4 (not React-Bootstrap)
* React-bootstrap-sweetalert


### Notable features

* Responsive design -- can be narrowed until only 1 cards per row are showing, or widened until 4 cards are showing per row. 

* Each card pointed at is highlighted in yellow through CSS:Hover.

* Score keeping is done at the App level. 

* Proper incorporation of Modal alerts for informational purposes and gameflow purposes, such as "Try Again" or "You Won!" messages. 


### Interesting Snippets

Took me a while to understand how modals work in React, and how to call them properly. Even now, there are some messages you never saw because the alerts are not queued, but rather, only the "latest" is shown. 

For example, if you beat the game (i.e. clicked on all 12 doctors without repeating) you will not see the final "info panel", but instead, you'll see just the victory screen. 

Or below, you never saw the "getAlertWrong()" because you get to see the one right after that, either "getAlertNoMax()" or "getAlertTryAgain()". In the final design, I decided to remove getAlertWrong() altogether and added some verbiage to the subsequent modals. Below is the intermediate code. 


```
handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        // you got it! This was not clicked before!
        element.clicked = true;
        this.setState({ 
          alert: this.getAlertNotes(element.actor, element.notes), Clicked: false});
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        // alert("Oh no! You clicked this one already! Your high score is " + this.state.currentScore)
        this.setState({
          alert:this.getAlertWrong()
        })
        // waah waah waah... wrong, sorry!
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
  ```

## Potential expansions, fixed, and so on. 

Rewrite the alerts to use promise/callbacks so that multiple modals are queued, instead of only showing the most recent. 

Abstract the game as an 'engine'. Package the verbiage, title, and pictures as XML bundles, and the game can easily be adapted to any genre, such as Doctor Who (yes, I know they have the 13th Doctor now) and so on. 



## Author

👤 **Kasey Chang**

* Website: https://www.linkedin.com/in/kasey-chang-0932b332/
* Github: [@kschang77](https://github.com/kschang77)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_