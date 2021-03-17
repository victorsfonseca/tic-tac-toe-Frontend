import styled from 'styled-components'
import ReturnGameButton from './ReturnGameButton/ReturnGameButton'
import Title from './Title/Title'
import WhoIAm from './WhoIAm/WhoIAm'

function TopBar(props){
    return(
        <div {...props}>
            <ReturnGameButton />
            <Title />
            <WhoIAm />
        </div>
    )
}

const TopBarStyled = styled(TopBar)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    position: relative;
    margin-bottom: 10px;
`
export default TopBarStyled