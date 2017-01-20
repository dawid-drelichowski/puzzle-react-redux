import React, {PropTypes} from 'react';

export default class extends React.Component {
  static propTypes = {
    field: PropTypes.number.isRequired
  };
  render() {
    return <li draggable="true" data-field={this.props.field}/>;
  }
}
