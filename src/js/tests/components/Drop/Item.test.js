import React from 'react';
import Item from 'components/Drop/Item';
import renderer from 'react-test-renderer';

describe('Drop item component', () => {
  function getRenderedComponent(field, dropped = false) {
    return renderer.create(
      <Item field={field} dropped={dropped}/>
    );
  }

  it('should be 2nd item not dropped', () => {
    expect(getRenderedComponent(2).toJSON()).toMatchSnapshot();
  });

  it('should be 4th item not dropped', () => {
    expect(getRenderedComponent(4).toJSON()).toMatchSnapshot();
  });

  it('should be 2nd item dropped', () => {
    expect(getRenderedComponent(2, true).toJSON()).toMatchSnapshot();
  });

  it('should be 4th item dropped', () => {
    expect(getRenderedComponent(4, true).toJSON()).toMatchSnapshot();
  });
});
