import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PuzzleView from 'views/PuzzleView';

export default class {
  constructor() {
    const store = createStore(function(state, action){
      return {}
    });

    ReactDOM.render(
      <Provider store={store}>
        <PuzzleView piecesOrder={[2, 5, 7, 9, 1, 3, 6, 4, 8]} />
      </Provider>,
      document.getElementById('puzzle')
    )
  }
}