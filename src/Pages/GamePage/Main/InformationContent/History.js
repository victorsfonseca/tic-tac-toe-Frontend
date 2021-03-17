import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FirstPlayerIcon, SecondPlayerIcon } from '../../../../Components/PlayersIcons'

const FIRST_PLAYER = 'FIRST_PLAYER'
// const SECOND_PLAYER = 'SECOND_PLAYER'

function HistoryItem(props){
    let player_icon = props.player === FIRST_PLAYER? <FirstPlayerIcon width={'12px'} />: <SecondPlayerIcon width={'12px'} />

    return(
        <div {...props}  >
            <p className='historyItemPlayer'>{player_icon}</p> 
            <p>&nbsp;&nbsp;marcou - linha&nbsp;&nbsp; </p>
            <p className='historyItemPlayer'>{props.row}</p> 
            <p>&nbsp;&nbsp;- coluna&nbsp;&nbsp; </p>
            <p className='historyItemPlayer'>{props.col}</p>
        </div>
    )
}

const HistoryItemStyled = styled(HistoryItem)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    border-radius: 8px;
    box-shadow: var(--neomorphism-button-shadows);
    width: 100%;
    margin-bottom: 15px;

    .historyItemPlayer{
        color: ${props => props.player === FIRST_PLAYER? 'var(--first-player-color)' : 'var(--second-player-color)'};
        font-weight: bold;
    }

    p{
        font-size: medium !important;
    }
`

function History(props){
    
    let history = useSelector(state => state.history)

    return(
        <div {...props}>
            <h3>Jogadas</h3>
            {history.length <= 0 ? <p>Ainda não houve nenhuma jogada.</p> : null }
            {history.map(item => <HistoryItemStyled row={item.position.row} col={item.position.column} player={item.player} key={'historyItem' + item.position.row + item.position.column}/>)}  
        </div>
    )
}

const HistoryStyled = styled(History)`
    p{
        font-size: small;
        text-align: center;
    }
`
export default HistoryStyled