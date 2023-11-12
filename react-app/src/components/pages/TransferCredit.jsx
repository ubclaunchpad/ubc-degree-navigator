import React from "react";
import { useNavigate } from "react-router-dom";

import theme from "../../theme";
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
    };

    const nextButtonClick = () => {
        if (hasTransferCredit) {
            navigate('/chooseTransferCreditMethod');
        } else {
            navigate('/programInformation');
        }
    };

    return (
        <div className="body" style={body}>
            <ProgressBar currStepIndex={3} />

            <div className="content" style={content}>
                <CheckTransferCredits
                    hasTransferCredit={hasTransferCredit}
                    setHasTransferCredit={setHasTransferCredit}
                    setEnableButton={setEnableButton}
                />

                <div className="buttons" style={buttons}>
                    <button
                        style={prevButton}
                        onClick={previousButtonClick}>
                        Previous Step
                    </button>

                    <button
                        style={
                            enableButton
                                ? nextButton
                                : disabledButton
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

const body = {
    fontFamily: "Montserrat",
    margin: 16,
    display: "flex",
    flexDirection: "row",
};

const content = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 92,
    width: "73.545%",
};

const buttons = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: theme.fonts.buttons,
    fontWeight: theme.fontWeights.buttons,
};

const disabledButton = {
    border: "none",
    borderRadius: "5px",
    paddingLeft: "25.5px",
    paddingRight: "25.5px",
    paddingTop: "12px",
    paddingBottom: "12px",
    backgroundColor: theme.colors.primaryDark,
    color: "#fff",
    opacity: "0.5",
    pointerEvents: "none",
};

const prevButton = {
    border: "none",
    padding: "10",
    backgroundColor: "rgba(0,0,0,0)",
    color: "#256AF4",
    cursor: "pointer",
};

const nextButton = {
    border: "none",
    borderRadius: "5px",
    paddingLeft: "25.5px",
    paddingRight: "25.5px",
    paddingTop: "12px",
    paddingBottom: "12px",
    backgroundColor: theme.colors.primaryDark,
    color: "#fff",
    cursor: "pointer",
};

