import styled from 'styled-components'

function Div(props){
    return( <div {...props}> {props.children} </div> )
}

const StyledDiv = styled(Div)`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    box-shadow: ${props => { return props.pressed? 'var(--neomorphism-button-pressed-shadows)' : 'var(--neomorphism-button-shadows)'}};
    cursor: ${props => {return props.onClick ? 'pointer': 'default'}};
`

export default StyledDiv