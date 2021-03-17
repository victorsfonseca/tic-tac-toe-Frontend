import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { possibleStates } from '../../../../../GlobalState/GameState/GameState'

function WonLine(props) {
    const status = useSelector(state => state.gameState)
    const where = useSelector(state => state.wonLine)

    const display = [possibleStates.FIRST_PLAYER_WON, 
                    possibleStates.SECOND_PLAYER_WON,
                    possibleStates.YOU_WON,
                    possibleStates.YOU_LOSE].includes(status) ? 'block': 'none';

    function setTopPosition(props){
        let top = '5%'
        if(props.row || props.row === 0) top = (20 + (props.row * 30)) + '%'
        if(props.diagonal || props.diagonal === 0) top = (5 + (props.diagonal*90)) + '%'
        return top
    }
    
    function setLeftPosition(props){
        let left = '5%'
        if(props.col || props.col === 0) left = (20 + (30*props.col)) + '%' 
        return left
    }
    
    function setTransformPosition(props){
        let transform = 'rotate(0deg)'
        if(props.col || props.col === 0) transform = 'rotate(90deg)'
        if(props.diagonal || props.diagonal === 0){
            const direction = props.diagonal? -1 : 1
            transform = 'skewY('+ (direction * 45) +'deg)'
        }
        return transform
    }
    
    const style = {
        display: display,
        top: setTopPosition(where),
        left: setLeftPosition(where),
        transform: setTransformPosition(where),
        WebkitTransform: setTransformPosition(where),
        MozTransform: setTransformPosition(where)
    }

    return(
        <div {...props} style={style} ></div>
    )
}

const WonLineStyled = styled(WonLine)`

    @keyframes grow{
        from {
            width: 0%;
        }
        to {
            width: 90%;
        }
    }

    display: none;
    position: absolute;
    border-top: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    z-index: 1;

    animation-name: grow;
    animation-duration: 1s;

    width: 90%;
    transform-origin: top left; 

`

export default WonLineStyled