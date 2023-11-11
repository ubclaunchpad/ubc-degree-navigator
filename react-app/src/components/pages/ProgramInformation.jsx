import React from "react";
import { useNavigate } from "react-router-dom";
import AdditionalInformation from "../onboarding/AdditionalInformation";

function ProgramInformation({
    data,
    setData,
    setEnableButton
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/results');
      };

    return (
         <div>
            <AdditionalInformation
               data={data}
               setData={setData}
               setEnableButton={setEnableButton}
            />
            <button onClick={handleButtonClick}>Next Step</button>
        </div>
        
    );
}

export default ProgramInformation