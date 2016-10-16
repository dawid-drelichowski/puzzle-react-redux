import React from 'react';

export default class extends React.Component {
  static propTypes = {
    piecesLeftCount: React.PropTypes.number.isRequired
  };
  render() {
    let status = <div className="alert label-warning text-white">Left: <span className="badge">{this.props.piecesLeftCount}</span></div>;

    if (this.props.piecesLeftCount === 0) {
      status = <div className="alert label-success text-white">✔ Done!</div>;
    }
    return <div className="status col-lg-2">
      {status}
    </div>;
  }
}