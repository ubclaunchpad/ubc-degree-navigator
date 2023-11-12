import React from "react";
import { useNavigate } from "react-router-dom";

import theme from "../../theme";
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
    };

    const nextButtonClick = () => {
        if (transferCreditRoute === 'upload') {
            navigate('/uploadTransferCredit');
        }

        if (transferCreditRoute === 'manual') {
            navigate('/manualTransferCredit');
        }
    };

    return (
        <div className="body" style={body}>
            <ProgressBar currStepIndex={4} />

            <div className="content" style={content}>
                <ChooseRoute
                    transferCreditRoute={transferCreditRoute}
                    setTransferCreditRoute={setTransferCreditRoute}
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
    );
}

export default ChooseTransferCreditMethod;

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

