export const Types ={
    UPDATE_HISTORY: 'UPDATE_HISTORY'
}

const initialState = []

// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.UPDATE_HISTORY:
        return action.history;
      default:
        return state;
    }
}

// Action Creators
  
export function updateHistory(history) {
    return { type: Types.UPDATE_HISTORY, history: history}
}