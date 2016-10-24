import {connect} from 'react-redux';
import Creators from 'actions/index';
import Zone from 'components/Drag/Zone';

export default connect(
  () => {
    return {};
  },
  dispatch => {
    return {
      onDragStart: index => {
        dispatch(Creators.dragStart(index));
      },
      onDragEnd: index => {
        dispatch(Creators.dragEnd(index));
      }
    };
  }
)(Zone);
