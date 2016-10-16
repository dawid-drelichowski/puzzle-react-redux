import React, {PropTypes} from 'react';
import Item from 'components/Drag/Item';

export default class extends React.Component {
  static propTypes = {
    piecesOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDragEnd: PropTypes.func.isRequired
  };
  onDragStart(event) {
    const target = event.target;

    event.dataTransfer.effectAllowed = 'move';
    //event.dataTransfer.dropEffect = 'move';
    target.classList.add('draggable-current');
    this.props.onDragStart(this.getFieldFromElement(target));
  }
  onDragEnd(event) {
    const target = event.target;

    target.classList.remove('draggable-current');
    this.props.onDragEnd(this.getFieldFromElement(target));
  }
  render() {
    return <div className="col-lg-5 label label-danger">
      <ul
        className="grid label-danger"
        onDragStart={event => this.onDragStart(event)}
        onDragEnd={event => this.onDragEnd(event)}
      >
        {this.props.piecesOrder.map((value, index) => {
          return <Item key={index} field={value} />
        })}
      </ul>
    </div>
  }
  getFieldFromElement(element) {
    return parseInt(element.dataset.field, 10);
  }
}