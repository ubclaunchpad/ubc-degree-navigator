import React from "react";
import { useNavigate } from "react-router-dom";
import CheckTransferCredits from "../onboarding/transferCredits/CheckTransferCredits";

function TransferCredit({
    hasTransferCredit,
	setHasTransferCredit,
	setEnableButton
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (hasTransferCredit) {
            navigate('/chooseTransferCreditMethod');
        } else {
            navigate('/programInformation');
        }    
    };

    return (
        <div>
            <CheckTransferCredits 
                hasTransferCredit={hasTransferCredit}
			    setHasTransferCredit={setHasTransferCredit}
			    setEnableButton={setEnableButton}
            />

            <button onClick={handleButtonClick}>Next Step</button>
        </div>
    )
}

export default TransferCredit