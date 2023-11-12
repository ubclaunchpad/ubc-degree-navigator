import React from "react";
import { useNavigate } from "react-router-dom";

import theme from "../../theme";
import page from "../../page";

import ProgressBar from "../onboarding/ProgressBar";
import ChooseRoute from "../onboarding/transferCredits/ChooseRoute";

function ChooseTransferCreditMethod({
    transferCreditRoute,
    setTransferCreditRoute,
    enableButton,
    setEnableButton
}) {
    const navigate = useNavigate();

    const previousButtonClick = () => {
        navigate('/transferCredit');
        setEnableButton(false);
    };

    const nextButtonClick = () => {
        if (transferCreditRoute === 'upload') {
            navigate('/uploadTransferCredit');
        }

        if (transferCreditRoute === 'manual') {
            navigate('/manualTransferCredit');
        }

        setEnableButton(false);
    };

    return (
        <div className="body" style={page.body}>
            <ProgressBar currStepIndex={4} />

            <div className="content" style={page.content}>
                <ChooseRoute
                    transferCreditRoute={transferCreditRoute}
                    setTransferCreditRoute={setTransferCreditRoute}
                    setEnableButton={setEnableButton}
                />

                <div className="buttons" style={page.buttons}>
                    <button
                        style={page.prevButton}
                        onClick={previousButtonClick}>
                        Previous Step
                    </button>

                    <button
                        style={
                            enableButton
                                ? page.nextButton
                                : page.disabledButton
                        }
                        onClick={nextButtonClick}>
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ChooseTransferCreditMethod;
