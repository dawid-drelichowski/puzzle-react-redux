import {connect} from 'react-redux';
import Creators from 'actions/index';
import Item from 'components/Drop/Item';

export default connect(
  state => {
    return {currentlyDragged: state.currentlyDragged};
  },
  dispatch => {
    return {
      onDrop: index => {
        dispatch(Creators.dropped(index));
      }
    };
  }
)(Item);
