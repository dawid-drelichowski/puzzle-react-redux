import React, {PropTypes} from 'react';

export default class extends React.Component {
  static propTypes = {
    field: PropTypes.number.isRequired,
    currentlyDragged: PropTypes.number,
    onDrop: PropTypes.func.isRequired
  };
  static defaultProps = {
    currentlyDragged: 0
  };
  state = {dropped: false};
  onDragOver(event) {
    if (this.isValidDragElement()) {
      event.preventDefault();
    }
  }
  onDrop(event) {
    if (this.isValidDragElement()) {
      event.preventDefault();
      this.setState({dropped: true});
      this.props.onDrop(this.props.field);
    }
  }
  render() {
    let props = {};

    switch (this.state.dropped) {
      case true:
        props = {
          'data-field': this.props.field
        };
        break;
      default:
        props = {
          'data-valid': this.props.field,
          onDragOver: event => this.onDragOver(event),
          onDrop: event => this.onDrop(event)
        };
        break;
    }
    return <li {...props}></li>;
  }
  isValidDragElement() {
    return this.props.field === this.props.currentlyDragged;
  }
}
