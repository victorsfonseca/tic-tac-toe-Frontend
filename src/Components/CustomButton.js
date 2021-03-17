import { useState } from "react";
import styled from "styled-components";
import StyledDiv from "./StyledDiv";

function CustomButton(props){
    
    const [pressed,setPressed] = useState(false)

    function buttonPressed(){
        setPressed(true)
    }

    function buttonUnpressed(){
        setPressed(false)
    }

    return(
        <StyledDiv pressed={pressed ? 1: 0} onMouseUp={buttonUnpressed} onMouseDown={buttonPressed} onTouchStart={buttonPressed} onTouchEnd={buttonUnpressed} {...props} > {props.children} </StyledDiv>
    )
}

const CustomButtonStyled = styled(CustomButton)`

`
export default CustomButtonStyled