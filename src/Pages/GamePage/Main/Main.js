import styled from 'styled-components'
import GameContent from './GameContent/GameContent'
import InformationContent from './InformationContent/InformationContent'

function Main(props){
    return(
        <main {...props} >
            <GameContent />
            <InformationContent />
        </main>
    )
}

const MainStyled = styled(Main)`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
    max-width: 1000px;

    @media screen and (max-width: 770px){
        flex-direction: column;
        align-items: center;
    }
`

export default MainStyled