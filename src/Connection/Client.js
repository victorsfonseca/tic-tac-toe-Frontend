import {io} from 'socket.io-client'
import { updateBoard } from '../GlobalState/Board/BoardState'
import { updateHistory } from '../GlobalState/History/HistoryState'
import { updateScore } from '../GlobalState/Score/ScoreState'
import { currentPlayerChanged, possibleStates as current_player_states } from '../GlobalState/CurrentPlayer/CurrentPlayer'
import { changeGameState, possibleStates as game_states } from '../GlobalState/GameState/GameState'
import { assignWhoIAm, possibleStates } from '../GlobalState/WhoIAm/WhoIAm'
import { changeWonLine } from '../GlobalState/WonLine/WonLine'

// const urlApi = 'http://192.168.1.113:1711'
const urlApi = 'https://tic-tac-toe-backend-nodejs.herokuapp.com/'



export default function client(dispatch){

    let socket = io(urlApi, { transports: ["websocket"], autoConnect: true, reconnection: false, query:{ gameId: '123456789'}, path: '/GAME/' })

    socket.on('connect', connected)
    socket.on('disconnect', disconnected)
    socket.on('BOARD_CHANGED', boardChanged)
    socket.on('PLAYER_CHANGED', playerChanged)
    socket.on('OPPONENT_TURN', opponentTurn)
    socket.on('YOUR_TURN', yourTurn)
    socket.on('YOU_WON', youWon)
    socket.on('YOU_LOSE', youLose)
    socket.on('WE_HAVE_A_WINNER', weHaveAWinner)
    socket.on('TIED', tied)
    socket.on('SCORE_CHANGED', scoreChanged)
    socket.on('HISTORY_CHANGED', historyChanged)
    socket.on('RESTARTED', gameRestarted)
    socket.on('WAITING_PLAYER', waittingPlayer)
    socket.on('GAME_RUNNING', gameRunning)
    socket.on('PLAYER_ASSIGNED', playerAssigned)
    socket.on('PLAYER_NOT_ASSIGNED', playerNotAssigned)

    function playerAssigned(...params){
        let [player, state] = params
        dispatch(assignWhoIAm(player))
        dispatch(currentPlayerChanged(state.currentPlayer))
    }

    function playerNotAssigned(){
        console.log("Player not assigned. I'm a game observer")
        dispatch(assignWhoIAm(possibleStates.OBSERVER))
    }

    function gameRestarted(){
        console.log('Game restarted')
    }

    function gameRunning(){
        console.log('Game Running')
        dispatch(changeGameState(game_states.GAME_RUNNING))
    }

    function waittingPlayer(){
        dispatch(changeGameState(game_states.WAITING_PLAYER))
    }
    
    function historyChanged(params) {
        const [history]  = params
        dispatch(updateHistory(history))
    }

    function scoreChanged(params) {
        const [score]  = params
        dispatch(updateScore(score))
    }

    function tied(params) {
        dispatch(changeGameState(game_states.TIED))
    }

    function weHaveAWinner(params) {
        // validate inputs
        let [obj] = params
        let winner = obj.player
        let where = obj.where

        dispatch(changeWonLine(where))
       
        if(winner === 'FIRST_PLAYER') dispatch(changeGameState(game_states.FIRST_PLAYER_WON))
        if(winner === 'SECOND_PLAYER') dispatch(changeGameState(game_states.SECOND_PLAYER_WON))
    }

    function  youWon(params) {
        let [where] = params
        dispatch(changeWonLine(where))
        dispatch(changeGameState(game_states.YOU_WON))
    }

    function youLose(params) {
        let [where] = params
        dispatch(changeWonLine(where))
        dispatch(changeGameState(game_states.YOU_LOSE))
    }

    function yourTurn(){
        dispatch(currentPlayerChanged(current_player_states.YOU))
    }

    function opponentTurn(){
        dispatch(currentPlayerChanged(current_player_states.OPPONENT))
    }

    function playerChanged(params) {
        const [currentPlayer] = params
        dispatch(currentPlayerChanged(currentPlayer))
    }

    function boardChanged( params ){
        const [board]  = params
        dispatch(updateBoard(board))
    }

    function connected(){
        console.log('[User connected] ' + socket.id)
    }

    function disconnected(){
        console.log('[User disconnected] ' + socket.id)
        dispatch(changeGameState(game_states.DISCONNECTED))
    }

    function disconnect() {
        socket.disconnect()
    }

    function play(row, col){
        socket.emit('PLAY' , row, col )
    }

    function undoPlay(){
        socket.emit('UNDO_PLAY')
    }

    function restart(){
        socket.emit('RESTART')
    }

    return {
        play: play,
        undoPlay: undoPlay,
        restart: restart,
        disconnect: disconnect
    }
}