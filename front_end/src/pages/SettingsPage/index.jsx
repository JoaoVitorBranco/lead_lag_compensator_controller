import { useState } from 'react'
import ClosedLoopImage from '../../components/ClosedLoopImage';
import InputField from '../../components/InputField';
import { TypeOfFormula } from '../../share/TypeOfFormula';
import { useNavigate  } from 'react-router-dom';



function SettingsPage() {
  const navigate = useNavigate();

  const [labelFormula, setLabelFormula] = useState(TypeOfFormula.getFormula("1"));
  const [labelParameter1, setLabelParameter1] = useState(TypeOfFormula.getParam1("1"));
  const [labelParameter2, setLabelParameter2] = useState(TypeOfFormula.getParam2("1"));
  const [labelParameter3, setLabelParameter3] = useState(TypeOfFormula.getParam3("1"));
  
  const [coef1, setCoef1] = useState(0);
  const [coef2, setCoef2] = useState(0);
  const [coef3, setCoef3] = useState(0);

  const [typeOfFormula, setTypeOfFormula] = useState("1");

  let coeficients = [setCoef1, setCoef2, setCoef3]
  let labelFunctions = [setLabelFormula, setLabelParameter1, setLabelParameter2, setLabelParameter3];
  
  return ( 
    <div>
      {/* Input field for each coeficient */}
      <InputField
        coeficients={coeficients}
        idx={0}
        labelParameter={labelParameter1}
      />
      <InputField
        coeficients={coeficients}
        idx={1}
        labelParameter={labelParameter2}
      />
      <InputField
        coeficients={coeficients}
        idx={2}
        labelParameter={labelParameter3}
      />
      
      {/* Select type of formula */}
      <div className="SelectionContainer">
        <select className="SelectionWidget" onChange={(e) => {
            setTypeOfFormula(e.target.value);
            setLabelFormula(TypeOfFormula.getFormula(typeOfFormula));
            setLabelParameter1(TypeOfFormula.getParam1(typeOfFormula));
            setLabelParameter2(TypeOfFormula.getParam2(typeOfFormula));
            setLabelParameter3(TypeOfFormula.getParam3(typeOfFormula));
          }}>
          <option value="1">First Formula</option>
          <option value="2">Second Formula</option>
        </select>
      </div>
      <div>
        {labelFormula}
      </div>

      {/* Image of Closed Loop System */}
      <ClosedLoopImage></ClosedLoopImage>

      {/* Button for change the page */}
      <button
        onClick = { () =>
          navigate("/graph", {replace: true, state: {coef1, coef2, coef3, typeOfFormula}})
        }
      >
        Confirm
      </button>

    </div>
  )
}

export default SettingsPage;
