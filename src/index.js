import React from 'react';
import ReactDOM from 'react-dom';
import { Animate, Transition } from 'react-move';
import './index.css';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';



// Render Blocks

class Blk extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
		value: this.props.value,
		des: null
	    };
    }

    handleClick(i className="logo"> <img src="./gh.png" width="50" height="50"></img></a>
		<a href="mailto:chekchek2007@gmail.com">Email</a>
		</div>);
    }
}

// Render Background

class Bg extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
	blks: Array(6).fill("v"),
	clicked: false
    };
     }

    invisible(e){
	e = <div style="visibility: hidden">  </div>;
	return e;
    }
    handleClick(i){
	const blks = this.state.blks.slice();
	for (var b in blks){
	    
	}
	this.state.clicked = true
	const element = this.invisible(document.getElementsByClassName('blk')[0]);
	const clickedBlk = document.getElementsByClassName('blk')[i];
	ReactDOM.hydrate(element, document.getElementsByClassName('idxPage')[0]);

    }

    renderBlk(i, j) {
	return <Blk value={i} row={j} onClick={() => this.handleClick(i)} />;

    }
    renderBtm(i){
	return <BtmBlk value={i} />;
    }

    render() {
	 return (
	    
      <div>
        <div className="row">
         {this.renderBlk(0, 0)}
        {this.renderBlk(1, 0)}
    </div>
        <div className="row">
            {this.renderBlk(2,1)}
        {this.renderBlk(3,1)}
        </div>
        <div className="row">
            {this.renderBlk(4,2)}
        {this.renderBlk(5,2)}
        </div>
	<div className="row">
          {this.renderBtm(6)}
        </div>
      </div>
    );
    }
}

class Idx extends React.Component {
         constructor(props) {
    super(props);
    this.state = {
	obj: 'bg'
    };
     }
  render() {
      return (
	      <div className="idxPage">

	       
        <div className="Bg">
          <Bg />
        </div>
      </div>
    );
  }
}

export default Idx;

// ====================================================

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
