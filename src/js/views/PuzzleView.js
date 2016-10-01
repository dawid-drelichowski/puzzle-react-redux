import React from 'react';
import StatusView from 'views/StatusView';
import DraggZoneView from 'views/DraggZoneView';
import DropZoneView from 'views/DropZoneView';

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