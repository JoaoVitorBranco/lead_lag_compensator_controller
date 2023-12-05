import { useLocation } from "react-router-dom";


function GraphPage(){
    const location = useLocation();
    
    return(

        <p>Salve salve, o valor é {location.state.coef1}, {location.state.coef2}, {location.state.coef3} e {location.state.typeOfFormula}</p>
    );
}

export default GraphPage