import {Actions} from 'actions/index';

export default (state = {currentlyDragged: 0, piecesLeft: []}, action) => {
  switch (action.type) {
    case Actions.DRAG_START:
      return {...state, currentlyDragged: action.index};
      break;
    case Actions.DRAG_END:
      return {...state, currentlyDragged: 0};
      break;
    case Actions.DROPPED:
      return {
        ...state,
        piecesLeft: state.piecesLeft.filter(value => {return value !== action.index})
      };
      break;
    default:
      return state;
  }
}