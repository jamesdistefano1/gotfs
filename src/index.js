import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import data from './component/data/data.json';

//const loadData = [...data];
//const newdata = data;
//console.log(newdata["jon snow"]["raw"]);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <Generator/>
      </div>
    );
  }
}

class Generator extends React.Component{
  constructor(props){
    super(props);
  }
  evaluate(first, second){
    var fighter;
    var teamOneTally = 0;
    var teamTwoTally = 0;
    for(fighter of first){
      var currentFighter = data.find(element => element.name===fighter);
      var fighterAllies = currentFighter.allies;
      var fighterEnemies = currentFighter.enemies;
      teamOneTally+= currentFighter.raw;
      var ally;
      var enemy;
      for (ally of first){ // add points if allies are on team
        if(fighterAllies.includes(ally)) teamOneTally+=25;
      }
      for (enemy of first){ // add points if allies are on team
        if(fighterEnemies.includes(enemy)) teamOneTally-=25;
      }
    }
    for(fighter of second){
      var currentFighter = data.find(element => element.name===fighter);
      var fighterAllies = currentFighter.allies;
      var fighterEnemies = currentFighter.enemies;
      teamTwoTally+= currentFighter.raw;
      var ally;
      var enemy;
      for (ally of second){ // add points if allies are on team
        if(fighterAllies.includes(ally)) teamTwoTally+=25;
      }
      for (enemy of second){ // add points if allies are on team
        if(fighterEnemies.includes(enemy)) teamTwoTally-=25;
      }
    }
    if(teamOneTally>teamTwoTally) return ("team 1 is " + teamOneTally);
    else if (teamTwoTally>teamOneTally) return ("team 2 is " + teamTwoTally);
    else return "A tie! We BOTH lose!" // in homer simpson's voice
  }
  render(){
    return(
      <div>
        <h1>The winner is: {this.evaluate(["arya stark", "the night king"], ["the night king", "arya stark"])}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
