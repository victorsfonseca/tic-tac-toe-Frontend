export const Types ={
    UPDATE_SCORE: 'UPDATE_SCORE'
}

const initialState = {
    first_player: 0,
    second_player: 0
}

// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.UPDATE_SCORE:
        return { ...state, first_player: action.score.first_player, second_player: action.score.second_player};
      default:
        return state;
    }
}

// Action Creators
  
export function updateScore(score) {
    return { type: Types.UPDATE_SCORE, score: score}
}