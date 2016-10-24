import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Puzzle from 'containers/Puzzle';
import reducer from 'reducers/index';

export default class {
  constructor() {
    const piecesOrder = [2, 5, 7, 9, 1, 3, 6, 4, 8],
      store = createStore(
        reducer,
        {currentlyDragged: 0, piecesLeft: piecesOrder},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

    ReactDOM.render(
      <Provider store={store}>
        <Puzzle piecesCount={piecesOrder.length}/>
      </Provider>,
      document.getElementById('puzzle')
    );
  }
}
