export const Types ={
    UPDATE_BOARD: 'UPDATE_BOARD'
}

const initialState = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.UPDATE_BOARD:
        return action.board;
      default:
        return state;
    }
}

// Action Creators
  
export function updateBoard(board) {
    return { type: Types.UPDATE_BOARD, board: board }
}

export function play(row,col){
    console.log( 'Play: ' + row + ' - ' + col)
    return {type: 'PLAY'}
}