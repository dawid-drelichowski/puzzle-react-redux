import React from 'react';

export default class extends React.Component {
  static propTypes = {
    piecesLeft: React.PropTypes.number.isRequired
  };
  static defaultProps = {
    piecesLeft: 0
  };
  render() {
    let status = <div className="alert label-warning text-white">Left: <span className="badge">{this.props.piecesLeft}</span></div>;

    if (this.props.piecesLeft === 0) {
      status = <div className="alert label-success text-white">✔ Done!</div>;
    }
    return <div className="status col-lg-2">
      {status}
    </div>;
  }
}