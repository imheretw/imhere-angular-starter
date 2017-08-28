/* ACTION TYPES */
export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR';

/* REDUCER */

export default function reducer(state = { sideBarOpened: true }, action) {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      return {
        sideBarOpened: !state.sideBarOpened,
      };
    default:
      return state;
  }
}

/* ACTION CREATORS */

export function toggleSideBar() {
  return {
    type: TOGGLE_SIDE_BAR,
  };
}
