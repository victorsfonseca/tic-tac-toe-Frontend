import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { possibleStates } from '../../../../../../GlobalState/WhoIAm/WhoIAm'
import { FirstPlayerIcon, SecondPlayerIcon } from '../../../../../../Components/PlayersIcons'


function WhoIAm(props){
    let whoIAm = useSelector(state => state.whoIAm)
    let icon

    if(whoIAm === possibleStates.FIRST_PLAYER) icon = <FirstPlayerIcon />
    if(whoIAm === possibleStates.SECOND_PLAYER) icon = <SecondPlayerIcon  />
    return(
        <div {...props}>
            {icon}
        </div>
    )
}

const WhoIAmStyled = styled(WhoIAm)`
    position: absolute;
    right: 10px;
    width: 15px;
`
export default WhoIAmStyled