import React from "react";
import { useNavigate } from "react-router-dom";
import ChooseRoute from "../onboarding/transferCredits/ChooseRoute";

function ChooseTransferCreditMethod({
    transferCreditRoute,
	setTransferCreditRoute,
	setEnableButton
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (transferCreditRoute === 'upload') {
            navigate('/uploadTransferCredit');
        }

        if (transferCreditRoute === 'manual') {
            navigate('/manualTransferCredit');
        }
      };

    return (
         <div>
            <ChooseRoute
                transferCreditRoute={transferCreditRoute}
                setTransferCreditRoute={setTransferCreditRoute}
                setEnableButton={setEnableButton}
            />
            <button onClick={handleButtonClick}>Next Step</button>
        </div>
        
    );
}

export default ChooseTransferCreditMethod