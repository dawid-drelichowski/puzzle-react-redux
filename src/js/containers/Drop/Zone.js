import {connect} from 'react-redux';
import Creators from 'actions/index';
import Zone from 'components/Drop/Zone';

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
)(Zone);
