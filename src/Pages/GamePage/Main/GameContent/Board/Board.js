import styled from 'styled-components'
import { useSelector } from 'react-redux' 
import BoardItem from './BoardItem'
import WonLine from './WonLine'
import Status from './Status'

function Board(props){
    let board = useSelector(state => state.board)
    return(
        <div {...props}>
            <Status won={props.won}/>
            <WonLine won={props.won} diagonal={1}/>
            {
            board.map((item,row) => {
                return item.map((item, col) =>{
                    return <BoardItem row={row} col={col} key={'boardItem' + row + col }/>
                })
            })
            }
        </div>
    )
}

const BoardStyled = styled(Board)`
    position: relative;
    width: auto;
    margin: 30px 0 30px 0;
    padding: 5%;
    border-radius: 20px;
    box-shadow: var(--neomorphism-shadows);
    display: flex;
    justify-content: row;
    flex-wrap: wrap;
`
export default BoardStyled