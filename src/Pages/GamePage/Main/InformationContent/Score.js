import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FirstPlayerIcon, SecondPlayerIcon } from '../../../../Components/PlayersIcons'

const FIRST_PLAYER = 'FIRST_PLAYER'
const SECOND_PLAYER = 'SECOND_PLAYER'


function ScoreItem(props){
    return(
        <div {...props}>
            <div>{props.icon}</div>
            <div>{props.score}</div>
        </div>
    )
}

const ScoreItemStyled = styled(ScoreItem)`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    border-radius: 8px;
    box-shadow: var(--neomorphism-button-shadows);
    width: 100px;
    height: 30px;
    margin: 10px;
    font-weight: bold;
    color: ${props => props.player === FIRST_PLAYER ? 'var(--first-player-color)' : 'var(--second-player-color)'};
`

function Score(props){
    let score = useSelector( state => state.score)
    return(
        <div {...props}>
            <h3>Placar</h3>
            <div id='scoreItens'>
                <ScoreItemStyled player={FIRST_PLAYER} icon={<FirstPlayerIcon width={'12px'} />} score={score.first_player} />
                <ScoreItemStyled player={SECOND_PLAYER} icon={<SecondPlayerIcon width={'12px'} />} score={score.second_player} />
            </div>
        </div>
    )
}

const ScoreStyled = styled(Score)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
        text-align: center;
    }

    #scoreItens{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`

export default ScoreStyled