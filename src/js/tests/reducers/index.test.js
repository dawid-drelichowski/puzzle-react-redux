import {Actions} from 'actions/index';
import reducer from 'reducers/index';

describe('Reducer', () => {
  const initialState = {currentlyDragged: 0, piecesLeft: []};

  it('should return the initial state', () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it('should handle DRAG_START', () => {
    const index = 2;
    expect(reducer(void 0, {type: Actions.DRAG_START, index})).toEqual({...initialState, currentlyDragged: index});
  });

  it('should handle DRAG_END', () => {
    expect(reducer(void 0, {type: Actions.DRAG_END})).toEqual(initialState);
  });

  it('should handle DROPPED', () => {
    expect(reducer({...initialState, piecesLeft: [1, 6, 8]}, {type: Actions.DROPPED, index: 6}))
      .toEqual({...initialState, piecesLeft: [1, 8]});
  });
});
