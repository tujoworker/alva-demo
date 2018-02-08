import { keyframes } from 'react-emotion'

export const slideUpKeyframes = keyframes`
0% {
    transform: translateY(10px);
}
100% {
    transform: translateY(0);
}
`

export const slideDownKeyframes = keyframes`
0% {
    opacity: 0;
    transform: translateY(-10px);
}
30% {
    opacity: 1;
}
100% {
    transform: translateY(0);
}
`

export const scaleInKeyframes = keyframes`
0% {
    ${'' /* opacity: 0; */}
    transform: scale(0.99) translateY(-2px);
}
100% {
    ${'' /* opacity: 1; */}
    transform: scale(1) translateY(0);
}
`
