import styled from 'styled-components'
import Score from "./Score";
import History from './History'

function InformationContent(props){
    return(
        <div {...props}>
            <Score />
            <History />
        </div>
    )
}

const InformationContentStyled = styled(InformationContent)`
    width: 40%;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 770px) {
        width: 80%;
        padding-left: 0px;
        padding-right: 0px;
        margin-top: 10px;
    }
`

export default InformationContentStyled