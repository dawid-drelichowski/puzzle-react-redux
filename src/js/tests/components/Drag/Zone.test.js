import React from 'react';
import Zone from 'components/Drag/Zone';
import Item from 'components/Drag/Item';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Drag zone component', () => {
  function getRenderedComponent(piecesOrder, onDragStart = () => {}, onDragEnd = () => {}) {
    return renderer.create(
      <Zone piecesOrder={piecesOrder} onDragStart={onDragStart} onDragEnd={onDragEnd} />
    );
  }
  function getMountedComponent(piecesOrder, onDragStart = () => {}, onDragEnd = () => {}) {
    return mount(
      <Zone piecesOrder={piecesOrder} onDragStart={onDragStart} onDragEnd={onDragEnd} />
    );
  }

  it('should have 3 items', () => {
    expect(getRenderedComponent([3, 1, 2]).toJSON()).toMatchSnapshot();
  });

  it('should have 5 items', () => {
    expect(getRenderedComponent([3, 2, 1, 5, 4]).toJSON()).toMatchSnapshot();
  });

  it('item should have "draggable-current" class when dragged', () => {
    const secondItem = getMountedComponent([3, 1, 2]).find(Item).at(1);

    secondItem.simulate('dragStart', {dataTransfer: {setData: () => {}}});
    expect(secondItem.hasClass('draggable-current')).toBeTruthy();
  });
});
