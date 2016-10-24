export const Actions = {
  DRAG_START: 'DRAG_START',
  DRAG_END: 'DRAG_END',
  DROPPED: 'DROPPED'
};

export default class {
  static dragStart(index) {
    return {type: Actions.DRAG_START, index};
  }
  static dragEnd(index) {
    return {type: Actions.DRAG_END, index};
  }
  static dropped(index) {
    return {type: Actions.DROPPED, index};
  }
}
