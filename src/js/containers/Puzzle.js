import {connect} from 'react-redux'
import Puzzle from 'components/Puzzle';

export default connect(
  state => {
    return {piecesOrder: state.piecesLeft};
  },
  dispatch => {
    return {};
  }
)(Puzzle);