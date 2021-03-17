import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import ClientContext from '../../../../../Connection/ClientContext'
import { FirstPlayerIcon, SecondPlayerIcon } from '../../../../../Components/PlayersIcons'

function BoardItem(props){

    let board = useSelector(state => state.board)
    let player = board[props.row][props.col]
    let icon = (player === 'FIRST_PLAYER')? <FirstPlayerIcon width={'80%'} /> : <SecondPlayerIcon width={'80%'} />
    if(player == null) icon = null 

    let client = useContext(ClientContext)
    
    function onClick(e){
        client.play(props.row, props.col)
    }

    return(
        <div {...props} onClick={onClick}>
            <div {...props} className='pseudo'>
                <div className='child'>
                    {icon}
                </div>
            </div>
        </div>
    )
}

const BoardItemStyled = styled(BoardItem)`
    width: 33.3%;
    padding-top: 33.3%;
    position: relative;
    cursor: pointer;
    font-size: 100px;

    .pseudo{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: ${props => props.col === 1 || props.col === 2 ? 'calc( 100% - 2px)': '100%' };
        height: ${props => props.row === 1 || props.row === 2 ? 'calc( 100% - 2px)': '100%' };
        border: solid 0;
        border-top-width: ${props => props.row === 0 ? 0 : '2px' };
        border-right-width: ${props => props.col === 2 ? 0 : '2px' };

        .child{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 100%;
        }
    }
`
export default BoardItemStyled