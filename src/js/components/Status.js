import React from 'react';

export default class extends React.Component {
  static propTypes = {piecesCount: React.PropTypes.number.isRequired};
  state = {piecesLeft: this.props.piecesCount};
  constructor(props) {
    super(props);
    this.handlePiecesChange = this.handlePiecesChange.bind(this);
  }
  handlePiecesChange() {
    this.setState({piecesLeft: this.state.piecesLeft - 1});
  }
  render() {
    let status = <div className="alert label-warning text-white">Left: <span className="badge">{this.state.piecesLeft}</span></div>;

    if (this.state.piecesLeft === 0) {
      status = <div className="hidden alert label-success text-white">✔ Done!</div>;
    }
    return <div className="status col-lg-2" onClick={this.handlePiecesChange}>
      {status}
    </div>;
  }
}