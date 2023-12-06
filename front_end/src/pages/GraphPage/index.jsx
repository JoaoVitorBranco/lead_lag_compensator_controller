import { useLocation } from "react-router-dom";
import { useState } from "react";
import LineChart from "../../components/LineChart";
import StepValue from "../../components/StepValue";
import differenceEquation from "../../share/DifferenceEquation";


function GraphPage(){

    let x_ant = 0;
    let y_ant = 0;
    let y = 0;

    const kc = 0.32;
    const zc = 4;
    const pc = 8;

    const t = 1; // seconds

    const [stepValue, setStepValue] = useState(0);

    const [labels, setLabels] = useState([0]);
    const [values, setValues] = useState([0]);
    
    const location = useLocation();
    setInterval(() => {
        setLabels(labels.concat(labels[labels.length-1] + 1));

        y = differenceEquation(kc, zc, pc, t, y_ant, x_ant, stepValue);
        y_ant = y;
        x_ant = stepValue;

        setValues(values.concat(y));  

        console.log("labels: " + labels[labels.length - 1]);
        console.log("values: " + values[values.length - 1]);
        console.log("\n");
    }, t*1000);

    return (
        <div>
            <p>Salve salve, o valor é {location.state.coef1}, {location.state.coef2}, {location.state.coef3} e {location.state.typeOfFormula}</p>
            {/* <LineChart
                labels={labels}
                values={values}
            /> */}
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