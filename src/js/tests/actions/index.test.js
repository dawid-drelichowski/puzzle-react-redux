import ActionsCreator, {Actions} from 'actions/index';

describe('Actions creator', () => {
  it('should create an action to drag start', () => {
    const index = 3;
    expect(ActionsCreator.dragStart(index)).toEqual({type: Actions.DRAG_START, index});
  });

  it('should create an action to drag end', () => {
    const index = 6;
    expect(ActionsCreator.dragEnd(index)).toEqual({type: Actions.DRAG_END, index});
  });

  it('should create an action to drop', () => {
    const index = 9;
    expect(ActionsCreator.dropped(index)).toEqual({type: Actions.DROPPED, index});
  });
});
