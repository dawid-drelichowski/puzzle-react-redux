import React from 'react';
import Zone from 'components/Drop/Zone';
import renderer from 'react-test-renderer';

describe('Drop zone component', () => {
  function getComponent(piecesCount, currentlyDragged = 0, onDrop = () => {}) {
    return renderer.create(
      <Zone piecesCount={piecesCount} currentlyDragged={currentlyDragged} onDrop={onDrop} />
    );
  }

  it('should has 2 items', () => {
    expect(getComponent(2).toJSON()).toMatchSnapshot();
  });

  it('should has 4 items', () => {
    expect(getComponent(4).toJSON()).toMatchSnapshot();
  });
});