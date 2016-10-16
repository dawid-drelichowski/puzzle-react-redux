import React, {PropTypes} from 'react';
import Item from 'containers/Drop/Item';

export default class extends React.Component {
  static propTypes = {
    piecesCount: PropTypes.number.isRequired,
  };
  render() {
    const pieces = new Array(this.props.piecesCount).fill(true);

    return <div className="col-lg-5 label label-success">
      <ul className="grid label-success">
        {pieces.map((value, index) => {
          return <Item key={index} field={index + 1} />
        })}
      </ul>
    </div>;
  }
}