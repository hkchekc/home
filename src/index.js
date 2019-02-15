import React from 'react';
import ReactDOM from 'react-dom';
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
	    };
	}
    render () {
	
	return (
		<button className="blk" onClick={() => this.setState({value: 'X'})}>
		    {this.state.value}
	</button>
	);
    }
}

//Render Bottom Block

class BtmBlk extends React.Component {
    render () {
	return (<button className="btmblk">
		Email / Github
		</button>);
    }
}

// Render Background

class Bg extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
      blks: Array(8).fill(null),
    };
  }
    renderBlk(i) {
	return <Blk value={i} />;
    }
    renderBtm(i){
	return <BtmBlk value={i} />;
    }
     render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="row">
          {this.renderBlk("Chek")}
          {this.renderBlk("About Me")}
        </div>
        <div className="row">
          {this.renderBlk(2)}
          {this.renderBlk(3)}
        </div>
        <div className="row">
          {this.renderBlk(4)}
          {this.renderBlk(5)}
        </div>
	<div className="row">
          {this.renderBtm(6)}
        </div>
      </div>
    );
    }
}

class Idx extends React.Component {
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
