const Types = { 
    CURRENT_PLAYER_CHANGED: 'CURRENT_PLAYER_CHANGED'
}

export const possibleStates = {
    FIRST_PLAYER: 'FIRST_PLAYER',
    SECOND_PLAYER: 'SECOND_PLAYER',
    YOU: 'YOU',
    OPPONENT: 'OPPONENT'
}

const inicialState = possibleStates.FIRST_PLAYER

export default function reducer(state = inicialState, action) {
    switch (action.type) {
      case Types.CURRENT_PLAYER_CHANGED:
        return action.currentPlayer;
      default:
        return state;
    }
}

// Action Creators
  
export function currentPlayerChanged(currentPlayer) {
    return { type: Types.CURRENT_PLAYER_CHANGED, currentPlayer: currentPlayer }
}