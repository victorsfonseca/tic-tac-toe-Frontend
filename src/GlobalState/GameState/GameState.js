const Types = {
    GAME_STATE_CHANGED: 'GAME_STATE_CHANGED',
    WHERE_WON_CHANGED: 'WHERE_WON_CHANGED'
}

export const possibleStates ={
    WAITING_PLAYER: 'WAITTING_PLAYER',
    GAME_RUNNING: 'GAME_RUNNING',
    FIRST_PLAYER_WON: 'FIRST_PLAYER_WON',
    SECOND_PLAYER_WON: 'SECOND_PLAYER_WON',
    YOU_WON: 'YOU_WON',
    YOU_LOSE: 'YOU_LOSE',
    TIED: 'TIED',
    DISCONNECTED: 'DISCONNECTED'
}

const inicialState = possibleStates.DISCONNECTED

export default function reducer(state = inicialState, action) {
    switch (action.type) {
      case Types.GAME_STATE_CHANGED:
        return action.gameState;
      default:
        return state;
    }
}

// Action Creators
  
export function changeGameState(gameState) {
    return { type: Types.GAME_STATE_CHANGED, gameState: gameState }
}