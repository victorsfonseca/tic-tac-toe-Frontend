import styled from 'styled-components'
import Footer from './Footer/Footer'
import TopBar from './TopBar/TopBar'
import Board from './Board/Board'

function GameContent(props){
    return(
        <div {...props}>
            <TopBar />
            <Board/>
            <Footer />
        </div>
    )
}

const GameContentStyled = styled(GameContent)`
    width: 60%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 770px) {
        width: 80%;
        padding-left: 0px;
        padding-right: 0px;
    }
`

export default GameContentStyled