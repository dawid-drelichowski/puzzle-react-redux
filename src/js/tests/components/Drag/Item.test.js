import React from 'react';
import Item from 'components/Drag/Item';
import renderer from 'react-test-renderer';

describe('Drag item component', () => {
  function getRenderedComponent(field) {
    return renderer.create(
      <Item field={field} />
    );
  }

  it('should be 3rd item', () => {
    expect(getRenderedComponent(3).toJSON()).toMatchSnapshot();
  });

  it('should be 5th item', () => {
    expect(getRenderedComponent(5).toJSON()).toMatchSnapshot();
  });
});
