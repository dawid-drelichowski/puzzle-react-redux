import React, {PropTypes} from 'react';
import Item from 'components/Drag/Item';

export default class extends React.Component {
  static propTypes = {
    piecesOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
    onDragStart: PropTypes.func.isRequired
  };
  onDragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    //event.dataTransfer.dropEffect = 'move';
    this.props.onDragStart(parseInt(event.target.dataset.field, 10));
  }
  render() {
    return <div className="col-lg-5 label label-danger">
      <ul className="grid label-danger" onDragStart={event => this.onDragStart(event)}>
        {this.props.piecesOrder.map((value, index) => {
          return <Item key={index} field={value} />
        })}
      </ul>
    </div>
  }
}