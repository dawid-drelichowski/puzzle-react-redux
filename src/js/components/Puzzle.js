import React, {PropTypes} from 'react';
import Status from 'containers/Status';
import DragZone from 'containers/Drag/Zone';
import DropZone from 'components/Drop/Zone';

export default class extends React.Component {
  static propTypes = {piecesOrder: PropTypes.arrayOf(PropTypes.number).isRequired};
  render() {
    const piecesOrder = this.props.piecesOrder;

    return <div className="row">
      <DropZone piecesCount={piecesOrder.length} />
      <Status />
      <DragZone piecesOrder={piecesOrder} />
    </div>;
  }
}