import React from 'react';
import Zone from 'components/Drag/Zone';
import renderer from 'react-test-renderer';

describe('Drag zone component', () => {
  function getComponent(piecesOrder, onDragStart = () => {}, onDragEnd = () => {}) {
    return renderer.create(
      <Zone piecesOrder={piecesOrder} onDragStart={onDragStart} onDragEnd={onDragEnd} />
    );
  }

  it('should has 3 items', () => {
    expect(getComponent([3, 1, 2]).toJSON()).toMatchSnapshot();
  });

  it('should has 5 items', () => {
    expect(getComponent([3, 2, 1, 5, 4]).toJSON()).toMatchSnapshot();
  });
});
