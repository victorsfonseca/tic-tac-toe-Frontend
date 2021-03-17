import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { possibleStates as gameStates } from '../../../../../GlobalState/GameState/GameState'
import { colors } from '../../../../../Styles/GlobalStyle'
import { possibleStates as whoIAmStates } from '../../../../../GlobalState/WhoIAm/WhoIAm'

function Status(props){

    const status = useSelector(state => state.gameState)
    let whoIAm = useSelector(state => state.whoIAm)

    let content = 'Desconectado'

    let display = status === gameStates.GAME_RUNNING? 'none': 'flex'
    
    let backgroundColor = colors.background_color
    let color = colors.primary_color

    switch (status) {
        case gameStates.DISCONNECTED:
            backgroundColor = colors.background_color
            color = colors.primary_color
            content = 'Desconectado!!! Reinicie o navegador.'
            break
        case gameStates.WAITING_PLAYER:
            backgroundColor = colors.background_color
            color = colors.primary_color
            content = 'Esperando Jogador...'
            break;
        case gameStates.TIED:
            backgroundColor = colors.yellow
            color = colors.dark
            content  = 'Empate!!!'
            break;
        case gameStates.FIRST_PLAYER_WON:
            backgroundColor = colors.first_player
            color = colors.light
            break;
        case gameStates.SECOND_PLAYER_WON:
            backgroundColor = colors.second_player
            color = colors.light
            break;
        case gameStates.YOU_WON:
            // eslint-disable-next-line
            if(whoIAm === whoIAmStates.FIRST_PLAYER){
                backgroundColor = colors.first_player
                color = colors.light
            }
            // eslint-disable-next-line
            if(whoIAm === whoIAmStates.SECOND_PLAYER){
                backgroundColor = colors.second_player
                color = colors.light
            }
            content = 'Você venceu!!!'
            break
        case gameStates.YOU_LOSE:
            // eslint-disable-next-line
            if(whoIAm === whoIAmStates.FIRST_PLAYER){
                backgroundColor = colors.second_player
                color = colors.light
            }
            // eslint-disable-next-line
            if(whoIAm === whoIAmStates.SECOND_PLAYER){
                backgroundColor = colors.first_player
                color = colors.light
            }
            content = 'Você perdeu!!!'
            break
        default:
            backgroundColor = colors.background_color
            color = colors.primary_color
            break;  
    }

    const style = {
        display: display,
        backgroundColor: backgroundColor,
        color: color
    }
    return(
        <div {...props} style={style}>{content}</div>
    )
}

const StatusStyled = styled(Status)`
    @keyframes show{
        from{opacity: 0;}
        to{opacity: 0.9;}
    }
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10;
    font-size: xx-large;
    opacity: 0;
    animation: show 1s;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
    text-align: center;
    padding: 10px;
`

export default StatusStyled