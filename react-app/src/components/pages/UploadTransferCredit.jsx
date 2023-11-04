import React from "react";
import { useNavigate } from "react-router-dom";
import UploadCredit from "../onboarding/transferCredits/UploadCredit";


function UploadTransferCredit({
    data,
	setData,
    setEnableButton
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/manualTransferCredit');
      };

    return (
        <div>
           <UploadCredit
                data={data}
                setData={setData}
                setEnableButton={setEnableButton}
            />
           <button onClick={handleButtonClick}>Next Step</button>
       </div>
       
    )
}

export default UploadTransferCredit