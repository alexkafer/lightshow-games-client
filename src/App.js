import React from 'react'
import { connect } from "react-redux";
import { getGame } from "./redux/selectors";
import { updateQueue, loadGame, startGame, endGame } from "./redux/actions";

import Dashboard from './components/Dashboard';
import Loadable from 'react-loadable';
import ApprovalButton from './components/ApprovalButton';

import SocketContext from './services/socket-context';
import openSocket from 'socket.io-client';

import './App.scss'

const socket = openSocket('https://lightshow.centralus.cloudapp.azure.com/');
// const socket = openSocket('https://:8080');
class App extends React.Component {
  constructor({loadGame, updateQueue, startGame, endGame}) {
    super();

    socket.on('game', (game) => {
      console.log("Game:", game);
      loadGame(game)
    });

    socket.on('queue', (place) => {
      console.log("Queue:", place);
      updateQueue(place)
    });

    socket.on('started', () => {
      console.log("Starting game!");
      startGame()
    });

    socket.on('ended', () => {
      console.log("Ended game!");
      endGame()
    });

    this.Loading = this.Loading.bind(this);
  }

  Loading (props) {
    if (props.error) {
      console.error(props.error);
      return <ApprovalButton title="Error!" description={"Unable to load " + this.props.currentGame + ". "} button="Retry" callback="props.retry"/>;
      } else if (props.pastDelay) {
      return <ApprovalButton title="Loading" description={"Loading" + this.props.currentGame + ". Please wait."}/>;
    } else {
      return null;
    }
  }

  render() {
    var CurrentAction;

    if (this.props.inGame) {
      CurrentAction = Loadable({
        loader: () => import('./games/' + this.props.currentGame),
        loading: this.Loading
      });
    } else {
      CurrentAction = Dashboard;
    } 
  
    return (
      <SocketContext.Provider value={socket}>
        <main role='main'>
          <CurrentAction />
        </main>
      </SocketContext.Provider>
    );
  }
}


const mapStateToProps = state => {
  return getGame(state);
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    loadGame: (game) => dispatch(loadGame(game)),
    updateQueue: (place) => dispatch(updateQueue(place)),
    startGame: () => dispatch(startGame()),
    endGame: () => dispatch(endGame()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
