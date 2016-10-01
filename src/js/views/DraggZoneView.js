import React from 'react';

export default class extends React.Component {
  static propTypes = {piecesOrder: React.PropTypes.arrayOf(React.PropTypes.number).isRequired};
  render() {
    return <div className="col-lg-5 label label-danger">
      <ul className="grid label-danger">
        {this.props.piecesOrder.map((value, index) => {
          return <li draggable="true" data-field={value} key={index}>{value}</li>;
        })}
      </ul>
    </div>;
  }
}