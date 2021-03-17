const Types = {
    WON_LINE_CHANGED: 'WON_LINE_CHANGED'
}

const inicialState = {}

export default function reducer(state = inicialState, action) {
    switch (action.type) {
      case Types.WON_LINE_CHANGED:
        return action.wonLine;
      default:
        return state;
    }
}

// Action Creators
  
export function changeWonLine(wonLine) {
    return { type: Types.WON_LINE_CHANGED, wonLine: wonLine }
}