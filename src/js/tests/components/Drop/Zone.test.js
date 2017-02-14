import React from 'react';
import Zone from 'components/Drop/Zone';
import Item from 'components/Drop/Item';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Drop zone component', () => {
  function getRenderedComponent(piecesCount, currentlyDragged = 0, onDrop = () => {}) {
    return renderer.create(
      <Zone piecesCount={piecesCount} currentlyDragged={currentlyDragged} onDrop={onDrop} />
    );
  }

  function getMountedComponent(piecesCount, currentlyDragged = 0, onDrop = () => {}) {
    return mount(
      <Zone piecesCount={piecesCount} currentlyDragged={currentlyDragged} onDrop={onDrop} />
    );
  }

  it('should have 2 items', () => {
    expect(getRenderedComponent(2).toJSON()).toMatchSnapshot();
  });

  it('should have 4 items', () => {
    expect(getRenderedComponent(4).toJSON()).toMatchSnapshot();
  });

  it('should call "onDrop" callback when dropped', (done) => {
    const currentlyDragged = 2,
      onDrop = (index) => {
        expect(index).toBe(currentlyDragged);
        done();
      },
      item = getMountedComponent(3, currentlyDragged, onDrop).find(Item).at(1);

    item.simulate('drop');
  });
});
