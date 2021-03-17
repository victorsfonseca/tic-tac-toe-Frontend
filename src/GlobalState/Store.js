import { createStore, combineReducers } from 'redux'
import boardReducer from './Board/BoardState'
import scoreReducer from './Score/ScoreState'
import historyReducer from './History/HistoryState'
import currentPlayerReducer from './CurrentPlayer/CurrentPlayer'
import gameStateReducer from './GameState/GameState'
import whoIAmReducer from './WhoIAm/WhoIAm'
import wonLineReducer from './WonLine/WonLine'

const reducers = combineReducers({
    board: boardReducer,
    score: scoreReducer,
    history: historyReducer,
    currentPlayer: currentPlayerReducer,
    gameState: gameStateReducer,
    whoIAm: whoIAmReducer,
    wonLine: wonLineReducer
})

export default createStore(reducers)