import React from 'react';

export default class extends React.Component {
  static propTypes = {piecesOrder: React.PropTypes.arrayOf(React.PropTypes.number).isRequired};
  handleDragStart(event) {
    console.log(event.target.dataset.field);
  }
  render() {
    return <div className="col-lg-5 label label-danger">
      <ul className="grid label-danger">
        {this.props.piecesOrder.map((value, index) => {
          return <li draggable="true" data-field={value} key={index} onDragStart={this.handleDragStart}>{value}</li>;
        })}
      </ul>
    </div>;
  }
}