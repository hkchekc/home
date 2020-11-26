import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Idx from './index'

//Render HomeButton
class HB extends React.Component {
    render () {
	return(
		<div className="logo"> <img src="./hb.png" width="50" height="50"></img></div>
	);
    }
}

class App extends Component {
  render() {
    return (
	    <div className="App">
	    <noscript>Please enable JavaScript in your browser!</noscript>
	    	   <div className="hb"><HB /></div>
            <header className="App-header">

	 <Idx id="idx"/>

        </header>

	 </div>
    );
  }
}

export default App;
