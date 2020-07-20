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
    this.state = {
      winner: ""
    };
  }
  evaluate(first, second){
    var firstFighter = data.find(element => element.name===first);
    var secondFighter = data.find(element => element.name===second);
    if(firstFighter.raw > secondFighter.raw) return firstFighter.name;
    else return secondFighter.name;
  }
  render(){
    return(
      <div>
        <h1>The winner is: {this.evaluate("jaime lannister", "tyrion lannister")}</h1>
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
