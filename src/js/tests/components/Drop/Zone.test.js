import React from 'react';
import Zone from 'components/Drop/Zone';
import renderer from 'react-test-renderer';

describe('Drop zone component', () => {
  function getRenderedComponent(piecesCount, currentlyDragged = 0, onDrop = () => {}) {
    return renderer.create(
      <Zone piecesCount={piecesCount} currentlyDragged={currentlyDragged} onDrop={onDrop} />
    );
  }

  it('should have 2 items', () => {
    expect(getRenderedComponent(2).toJSON()).toMatchSnapshot();
  });

  it('should have 4 items', () => {
    expect(getRenderedComponent(4).toJSON()).toMatchSnapshot();
  });
});
