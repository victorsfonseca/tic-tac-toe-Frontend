import styled from 'styled-components'
import { useContext } from 'react'
import { FaUndoAlt } from 'react-icons/fa'
import ClientContext from '../../../../../../Connection/ClientContext'

function ReturnGameButton(props){

    let client = useContext(ClientContext)

    function onClick(e){
        client.undoPlay()
    }
    return(
        <div {...props} onClick={onClick}>
            <FaUndoAlt/>
        </div>
    )
}

const ReturnGameButtonStyled = styled(ReturnGameButton)`
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
`
export default ReturnGameButtonStyled