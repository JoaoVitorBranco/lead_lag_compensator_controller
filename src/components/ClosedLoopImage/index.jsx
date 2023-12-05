import closed_loop from '../../assets/closed_loop.png'
import styled from 'styled-components'

const ClosedLoopImageBox = styled.img`
    border: 3px;
    border-color: black;
    border-style: solid;
    padding: 10px 20px 10px 20px;
`

function ClosedLoopImage(){
    return (
        <ClosedLoopImageBox src={closed_loop} alt="imagem"></ClosedLoopImageBox>
    )
}

export default ClosedLoopImage;