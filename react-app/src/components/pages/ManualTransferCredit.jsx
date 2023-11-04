import React from "react";
import { useNavigate } from "react-router-dom";
import EditTransferCredits from "../onboarding/transferCredits/EditTransferCredits";

function ManualTransferCredit({
    data,
	setData,
	setEnableButton
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/program');
    };

    return (
        <div>
           <EditTransferCredits
                data={data}
                setData={setData}
                setEnableButton={setEnableButton}
            />
           <button onClick={handleButtonClick}>Next Step</button>
       </div>
       
    )
}

export default ManualTransferCredit