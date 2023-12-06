import { useLocation } from "react-router-dom";
import { useState } from "react";
import LineChart from "../../components/LineChart";



function GraphPage(){
    const [labels, setLabels] = useState([0, 1, 2, 3]);
    const [values, setValues] = useState([0, 2, 4, 6]);
    
    const location = useLocation();
    const [value, setValue] = useState(0);
    setInterval(() => {
        setLabels(labels.concat(labels[labels.length-1] + 1));
        setValues(values.concat(values[values.length-1] + 2));  
    }, 2000);

    return (
        <div>
            <p>{value}</p>
            <p>Salve salve, o valor é {location.state.coef1}, {location.state.coef2}, {location.state.coef3} e {location.state.typeOfFormula}</p>
            <LineChart
                labels={labels}
                values={values}
            />
            <button
                onClick={() => {
                    setLabels(labels.concat(labels[labels.length-1] + 1));
                    setValues(values.concat(values[values.length-1] + 2)); 
                }}
            >
                Increment the graph
            </button>
        </div>        
    );
}

export default GraphPage