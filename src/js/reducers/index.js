import {Actions} from 'actions/index';

export default (state = {currentlyDragged: 0, piecesLeft: []}, action) => {
  switch (action.type) {
    case Actions.DRAG_START:
      return {...state, currentlyDragged: action.index};
    case Actions.DRAG_END:
      return {...state, currentlyDragged: 0};
    case Actions.DROPPED:
      return {
        ...state,
        piecesLeft: state.piecesLeft.filter(value => {
          return value !== action.index;
        })
      };
    default:
      return state;
  }
};
