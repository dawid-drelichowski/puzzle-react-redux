import React, {PropTypes} from 'react';

export default class extends React.Component {
  static propTypes = {
    field: PropTypes.number.isRequired,
    dropped: PropTypes.bool
  };
  static defaultProps = {
    dropped: false
  };
  render() {
    const props = {};

    switch (this.props.dropped) {
      case true:
        props['data-field'] = this.props.field;
        break;
      default:
        props['data-valid'] = this.props.field;
        break;
    }
    return <li {...props}></li>;
  }
}
