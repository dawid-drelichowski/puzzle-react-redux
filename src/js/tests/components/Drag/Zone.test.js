import React from 'react';
import Zone from 'components/Drag/Zone';
import renderer from 'react-test-renderer';

describe('Drag zone component', () => {
  function getComponent(piecesOrder, onDragStart = () => {}, onDragEnd = () => {}) {
    return renderer.create(
      <Zone piecesOrder={piecesOrder} onDragStart={onDragStart} onDragEnd={onDragEnd} />
    );
  }

  it('should has 6 items', () => {
    expect(getComponent([3, 2, 6, 1, 5, 4]).toJSON()).toMatchSnapshot();
  });
});
