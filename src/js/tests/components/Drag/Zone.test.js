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

  function getFakeDataTransfer() {
    return {dataTransfer: {setData: () => {}}};
  }

  it('should have 3 items', () => {
    expect(getRenderedComponent([3, 1, 2]).toJSON()).toMatchSnapshot();
  });

  it('should have 5 items', () => {
    expect(getRenderedComponent([3, 2, 1, 5, 4]).toJSON()).toMatchSnapshot();
  });

  it('item should have "draggable-current" class when drag started', () => {
    const item = getMountedComponent([3, 1, 2]).find(Item).at(1);

    item.simulate('dragStart', getFakeDataTransfer());
    expect(item.hasClass('draggable-current')).toBeTruthy();
  });

  it('item should not have "draggable-current" class when drag ended', () => {
    const item = getMountedComponent([3, 1, 2]).find(Item).at(0);

    item.simulate('dragEnd', getFakeDataTransfer());
    expect(item.hasClass('draggable-current')).toBeFalsy();
  });

  it('should call "onDragStart" callback when drag started', (done) => {
    const onDragStart = (index) => {
        expect(index).toBe(2);
        done();
      },
      item = getMountedComponent([3, 1, 2], onDragStart).find(Item).at(2);

    item.simulate('dragStart', getFakeDataTransfer());
  });

  it('should call "onDragEnd" callback when drag ended', (done) => {
    const onDragEnd = (index) => {
        expect(index).toBe(3);
        done();
      },
      item = getMountedComponent([3, 1, 2], () => {}, onDragEnd).find(Item).at(0);

    item.simulate('dragEnd', getFakeDataTransfer());
  });
});
