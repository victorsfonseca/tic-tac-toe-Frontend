import styled from 'styled-components'

function Footer(props){
    return(
        <footer {...props}>
            <p>Designed and developed by Victor Fonseca. <a href='https://github.com/victorsfonseca/jogo_da_velha'>Click here</a> and learn more.</p>
        </footer>
    )
}

const FooterStyled = styled(Footer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: small;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;

    a{
        text-decoration: none;
        color: var(--primary-color);
    }
`

export default FooterStyled