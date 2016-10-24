import React, {PropTypes} from 'react';

export default class extends React.Component {
  static propTypes = {
    field: PropTypes.number.isRequired
  };
  render() {
    const props = this.props;
    return <li draggable="true" data-field={props.field}/>;
  }
}
