import React, { Component } from 'react'

import { Players } from '../shared/ListOfPlayers';
import FilmsPresentation from './FilmsPresentation';

import PlayersPresentation from './PlayersPresentation';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            // players: Players,
            f: FilmsPresentation
        };
     }
    
  render() {
    return (
        // <>
        // <PlayersPresentation players={this.state.players} />
        <FilmsPresentation f={this.state.f} />
        // </>
    )
  }
}


