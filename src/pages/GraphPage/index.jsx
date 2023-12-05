import { useLocation } from "react-router-dom";
import { useState } from "react";


function GraphPage(){
    const location = useLocation();
    const [value, setValue] = useState(0);
    setInterval(() => {
        setValue(value + 1);
    }, 1000);

    return (
        <div>
            <p>{value}</p>
            <p>Salve salve, o valor é {location.state.coef1}, {location.state.coef2}, {location.state.coef3} e {location.state.typeOfFormula}</p>
        </div>        
    );
}

export default GraphPage