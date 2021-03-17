import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { possibleStates as current_player_states} from '../../../../../../GlobalState/CurrentPlayer/CurrentPlayer'
import { possibleStates as gameStates } from '../../../../../../GlobalState/GameState/GameState'
import { possibleStates } from '../../../../../../GlobalState/WhoIAm/WhoIAm'


function Title(props){
    let current_player = useSelector(state => state.currentPlayer)
    let game_state = useSelector(state => state.gameState)
    let whoIAm = useSelector(state => state.whoIAm)

    let title = ' '

    if(    game_state === gameStates.FIRST_PLAYER_WON
        || game_state === gameStates.SECOND_PLAYER_WON
        || game_state === gameStates.TIED
        || game_state === gameStates.YOU_WON
        || game_state === gameStates.YOU_LOSE) title = 'Reinicie o jogo'

    if(game_state === gameStates.GAME_RUNNING){
        switch (current_player) {
            case current_player_states.FIRST_PLAYER:
                console.log('Vez de x')
                title = 'Vez de: x'
                if(whoIAm === possibleStates.FIRST_PLAYER) title = 'Sua vez'
                if(whoIAm === possibleStates.SECOND_PLAYER) title = 'Aguarde sua vez'
                break;
            case current_player_states.SECOND_PLAYER:
                console.log('Vez de o')
                title = 'Vez de: o'
                if(whoIAm === possibleStates.FIRST_PLAYER) title = 'Aguarde sua vez'
                if(whoIAm === possibleStates.SECOND_PLAYER) title = 'Sua vez'
                break;
            case current_player_states.YOU:
                title = 'Sua vez'
                break;
            case current_player_states.OPPONENT:
                title = 'Aguarde sua vez'
                break;
        
            default:
                break;
        }
    }
    return(
        <div {...props}>
            <h4>{title}</h4>
        </div>
    )
}

const TitleStyled = styled(Title)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: medium;
    h4{
        margin: 0;
    }
`
export default TitleStyled