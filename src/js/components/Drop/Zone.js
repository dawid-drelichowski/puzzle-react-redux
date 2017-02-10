import React, {PropTypes} from 'react';
import Item from 'components/Drop/Item';

export default class extends React.Component {
  static propTypes = {
    piecesCount: PropTypes.number.isRequired,
    currentlyDragged: PropTypes.number,
    onDrop: PropTypes.func.isRequired
  };
  static defaultProps = {
    currentlyDragged: 0
  };
  onDragOver = (event) => {
    if (this.isValidDragElement(event.target)) {
      event.preventDefault();
    }
  };
  onDrop = (event) => {
    if (this.isValidDragElement(event.target)) {
      const dropped = this.state.dropped.slice();
      dropped[this.props.currentlyDragged - 1] = true;
      this.setState({dropped});
      event.preventDefault();
      this.props.onDrop(this.props.currentlyDragged);
    }
  };
  constructor(props) {
    super(props);
    this.state = {dropped: new Array(this.props.piecesCount).fill(false)};
  }
  render() {
    return <div className="col-lg-5 label label-success">
      <ul
        className="grid label-success"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {this.state.dropped.map((value, index) => {
          return <Item key={index} field={index + 1} dropped={value}/>;
        })}
      </ul>
    </div>;
  }
  isValidDragElement(dragged) {
    return this.getValidFromElement(dragged) === this.props.currentlyDragged;
  }
  getValidFromElement(element) {
    return parseInt(element.getAttribute('data-valid'), 10);
  }
}
