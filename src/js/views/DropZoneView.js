import React from 'react';

export default class extends React.Component {
  static propTypes = {piecesCount: React.PropTypes.number.isRequired};
  handleDragOver(event) {
    console.log(event.target.dataset.valid);
  }
  render() {
    const pieces = new Array(this.props.piecesCount).fill(true);

    return <div className="col-lg-5 label label-success">
      <ul className="grid label-success">
        {pieces.map((value, index) => {
          return <li key={index} data-valid={index + 1} onDragOver={this.handleDragOver}>{index + 1}</li>;
        })}
      </ul>
    </div>;
  }
}