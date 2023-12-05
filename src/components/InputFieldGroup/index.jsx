import inputField from "../InputField";

function InputFieldGroup({coeficients, labels}){
    return(
        <ul>
            {Array.from(Array(coeficients.length).keys().map((idx) => {
                <InputField
                    coeficients={coeficients}
                    idx={idx}
                    labelParameter={labels[idx]}
                />
            }))}
        </ul>
    );
}

export default InputFieldGroup;