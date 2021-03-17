// The other components styles are in the same file .js of component

import Font from '../Assets/Fonts/BungeeShade-Regular.ttf'
import { createGlobalStyle } from 'styled-components'

export const colors = {
    red: 'var(--red-color)',
    blue: 'var(--blue-color)',
    yellow: 'var(--yellow-color)',
    light: 'var(--light-color)',
    dark: 'var(--dark-color)',
    first_player: 'var(--first-player-color)',
    second_player: 'var(--second-player-color)',
    primary_color: 'var(--primary-color)',
    background_color: 'var(--background-color)'
}

const GlobalStyle = createGlobalStyle`

@font-face{
    font-family: BungeeShade;
    src: url(${Font});
}

:root{
    
    --red-color: #ff5071;
    --blue-color: #4265FF;
    --yellow-color: #FFD969;
    --light-color: #f3f7ff;
    --dark-color: #3a456b;
    
    --primary-color: #3a456b;
    --background-color: #f3f7ff;

    --first-player-color: var(--red-color);
    --second-player-color: var(--blue-color);
  
    --neomorphism-shadows:  10px 10px 39px #3a456b41,
                            -10px -10px 39px #ffffff;
  
    --neomorphism-button-shadows:  3px 3px 9px #3a456b41,
                                  -3px -3px 9px #ffffff;
  
    --neomorphism-button-pressed-shadows:   inset 3px 3px 9px #3a456b41,
                                            inset -3px -3px 9px #ffffff;
      
}
  
@media (prefers-color-scheme: dark){
    :root{
      --primary-color: #f3f7ff;
      --red-color: #ff5071;
      --blue-color: #4265FF;
      --yellow-color: #FFD969;
      --background-color: #3a456b;
  
      --neomorphism-shadows:  10px 10px 39px #313b5b,
      -10px -10px 39px #434f7b;
  
      --neomorphism-button-shadows:  3px 3px 9px #313b5b,
                -3px -3px 9px #434f7b;
  
      --neomorphism-button-pressed-shadows: inset 3px 3px 9px #313b5b,
      inset -3px -3px 9px #434f7b;
  
    }
}
  
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--primary-color);
}
  
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`

export default GlobalStyle