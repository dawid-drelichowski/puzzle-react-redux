import React from 'react';
import StatusView from 'components/Status';
import DraggZoneView from 'components/DraggZone';
import DropZoneView from 'components/DropZone';

export default class extends React.Component {
  static propTypes = {piecesOrder: React.PropTypes.arrayOf(React.PropTypes.number).isRequired};
  render() {
    const piecesOrder = this.props.piecesOrder;

    return <div className="row">
      <DropZoneView piecesCount={piecesOrder.length} />
      <StatusView piecesCount={piecesOrder.length} />
      <DraggZoneView piecesOrder={piecesOrder} />
    </div>;
  }
}