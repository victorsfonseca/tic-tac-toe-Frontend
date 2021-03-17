import styled from 'styled-components'
import { useContext } from 'react'
import CustomButton from '../../../../../Components/CustomButton'
import ClientContext from '../../../../../Connection/ClientContext'

function Footer(props){

    let client = useContext(ClientContext)

    function onClick(event) {
        client.restart()
    }

    return(
        <div {...props}>
            <CustomButton onClick={onClick} >Reiniciar Jogo</CustomButton>
        </div>
    )
}

const FooterStyled = styled(Footer)`
    display: flex;
    justify-content: center;
`
export default FooterStyled