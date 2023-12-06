import styled from "styled-components";
import Input from "../Input";

const InputFieldContainer = styled.li`
`

function InputField({coeficients, idx, labelParameter}){
    return (
        <InputFieldContainer key={idx}>
            {labelParameter}
            <Input
                placeholder={labelParameter.slice(0,-2)}
                onChange={(e) => {
                    let value = parseFloat(e.target.value);
                    if(!isNaN(value)){
                        coeficients[idx](value);
                    }
                }}
            />
        </InputFieldContainer>
    );
}

export default InputField;