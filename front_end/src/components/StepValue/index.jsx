import styled from 'styled-components'

const StepValueContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

function StepValue({value, setValue}){
    return(
        <StepValueContainer>
            <button
                onClick={() => {
                    setValue(value - 1);
                }}
            >-</button>
            <p>{value}</p>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >+</button>
        </StepValueContainer>
    );
}

export default StepValue