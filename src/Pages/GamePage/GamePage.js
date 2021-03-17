import styled from 'styled-components'
import TopBar from '../../Components/TopBar'
import Footer from '../../Components/Footer'
import Main from '../GamePage/Main/Main'
import Client from '../../Connection/Client'
import { useDispatch } from 'react-redux'
import ClientContext from "../../Connection/ClientContext";

function GamePage(props){

    let dispatch = useDispatch()
    let client = Client(dispatch)

    return(
        <div className={props.className}>
            <ClientContext.Provider value={client}>
                <TopBar />
                <Main />
                <Footer />
            </ClientContext.Provider>
        </div>
    )
}

const GamePageStyled = styled(GamePage)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default GamePageStyled