import React from "react";
import { useNavigate } from "react-router-dom";

import page from "./page";
import ProgressBar from "../onboarding/ProgressBar";
import CheckTransferCredits from "../onboarding/transferCredits/CheckTransferCredits";

function TransferCredit({
    hasTransferCredit,
    setHasTransferCredit,
    enableButton,
    setEnableButton
}) {
    const navigate = useNavigate();

    const previousButtonClick = () => {
        navigate('/manualCourseHistory');
        setEnableButton(false);
    };

    const nextButtonClick = () => {
        if (hasTransferCredit) {
            navigate('/chooseTransferCreditMethod');
        } else {
            navigate('/programInformation');
        }

        setEnableButton(false);
    };

    return (
        <div className="body" style={page.body}>
            <ProgressBar currStepIndex={3} />

            <div className="content" style={page.content}>
                <CheckTransferCredits
                    hasTransferCredit={hasTransferCredit}
                    setHasTransferCredit={setHasTransferCredit}
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

    )
}

export default TransferCredit;
