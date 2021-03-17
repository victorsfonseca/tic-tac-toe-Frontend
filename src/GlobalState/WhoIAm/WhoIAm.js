const Types = {
    WHO_I_AM_CHANGED: 'WHO_I_AM_CHANGED'
}

export const possibleStates ={
    FIRST_PLAYER: 'FIRST_PLAYER',
    SECOND_PLAYER: 'SECOND_PLAYER',
    OBSERVER: 'OBSERVER'
}

const inicialState = possibleStates.OBSERVER

export default function reducer(state = inicialState, action) {
    switch (action.type) {
      case Types.WHO_I_AM_CHANGED:
        return action.whoIAm;
      default:
        return state;
    }
}

// Action Creators
  
export function assignWhoIAm(whoIAm) {
    return { type: Types.WHO_I_AM_CHANGED, whoIAm: whoIAm }
}