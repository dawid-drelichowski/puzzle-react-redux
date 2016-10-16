import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Puzzle from 'components/Puzzle';
import reducer from 'reducers/index';

export default class {
  constructor() {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    ReactDOM.render(
      <Provider store={store}>
        <Puzzle piecesOrder={[2, 5, 7, 9, 1, 3, 6, 4, 8]} />
      </Provider>,
      document.getElementById('puzzle')
    )
  }
}