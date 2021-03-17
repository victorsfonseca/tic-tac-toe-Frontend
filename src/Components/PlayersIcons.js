import { colors } from '../Styles/GlobalStyle'

export function FirstPlayerIcon(props){
    return(
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
            <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_1-2" data-name="Camada 1">
                    <line x1="100" y1="100" x2="980" y2="980" fill="none" stroke={colors.first_player} strokeLinecap="round" strokeLinejoin="round" strokeWidth="200"/>
                    <line x1="980" y1="100" x2="100" y2="980" fill="none" stroke={colors.first_player} strokeLinecap="round" strokeLinejoin="round" strokeWidth="200"/>
                </g>
            </g>
        </svg>
    )
}

export function SecondPlayerIcon(props){
    return(
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" fill={colors.second_player}>
            <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_2-2" data-name="Camada 2">
                    <path d="M540,200a338.39,338.39,0,1,1-132.28,26.64A337.59,337.59,0,0,1,540,200M540,0C241.77,0,0,241.77,0,540s241.77,540,540,540,540-241.77,540-540S838.23,0,540,0Z"/>
                </g>
            </g>
        </svg>
    )
}
