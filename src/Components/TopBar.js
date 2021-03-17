import styled from "styled-components"

function TopBar(props){
    return(
        <header {...props}>
            <h1>Jogo da Velha</h1>
        </header>
    )
}

const TopBarStyled = styled(TopBar)`
    text-align: center;
    font-family: "BungeeShade";
    margin-bottom: 20px;
`

export default TopBarStyled