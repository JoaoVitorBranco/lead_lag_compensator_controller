import { useLocation } from "react-router-dom";
import { useState } from "react";
import LineChart from "../../components/LineChart";
import StepValue from "../../components/StepValue";



function GraphPage(){

    const [stepValue, setStepValue] = useState(0);

    const [labels, setLabels] = useState([0]);
    const [values, setValues] = useState([0]);
    
    const location = useLocation();
    setInterval(() => {
        setLabels(labels.concat(labels[labels.length-1] + 1));
        setValues(values.concat(stepValue));  
    }, 2000);

    return (
        <div>
            <p>Salve salve, o valor é {location.state.coef1}, {location.state.coef2}, {location.state.coef3} e {location.state.typeOfFormula}</p>
            <LineChart
                labels={labels}
                values={values}
            />
            <button
                onClick={() => {
                    setLabels([...labels, labels[labels.length-1] + 1]);
                    setValues(values.concat(values[values.length-1] + 2)); 
                }}
            >
                Increment the graph
            </button>

            <StepValue
                value={stepValue}
                setValue={setStepValue}
            />
        </div>        
    );
}

export default GraphPage