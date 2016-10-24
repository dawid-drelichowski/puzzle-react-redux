import React, {PropTypes} from 'react';
import Status from 'components/Status';
import DragZone from 'containers/Drag/Zone';
import DropZone from 'components/Drop/Zone';

export default class extends React.Component {
  static propTypes = {
    piecesOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
    piecesCount: PropTypes.number.isRequired
  };
  render() {
    return <div className="row">
      <DropZone piecesCount={this.props.piecesCount}/>
      <Status piecesLeftCount={this.props.piecesOrder.length}/>
      <DragZone piecesOrder={this.props.piecesOrder}/>
    </div>;
  }
}
