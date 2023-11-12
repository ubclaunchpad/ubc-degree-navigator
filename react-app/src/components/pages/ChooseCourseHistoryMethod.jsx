import React from "react";
import { useNavigate } from "react-router-dom";

import theme from "../../theme";
import ProgressBar from "../onboarding/ProgressBar";
import ChooseMethod from "../onboarding/courseHistory/ChooseMethod";

function ChooseCourseHistoryMethod({
    transcriptMethod,
    setTranscriptMethod,
    enableButton,
    setEnableButton
}) {
    const navigate = useNavigate();

    const nextButtonClick = () => {
        if (transcriptMethod === 'upload') {
            navigate('/uploadCourseHistory');
        }

        if (transcriptMethod === 'manual') {
            navigate('/manualCourseHistory');
        }
    };

    return (
        <div className="body" style={body}>
            <ProgressBar currStepIndex={0} />

            <div className="content" style={content}>
                <ChooseMethod
                    transcriptMethod={transcriptMethod}
                    setTranscriptMethod={setTranscriptMethod}
                    setEnableButton={setEnableButton}
                />

                <div className="buttons" style={buttons}>
                    <button
                        style={
                            enableButton
                                ? nextButton
                                : disabledButton
                        }
                        onClick={nextButtonClick}
                    >
                        Next Step →
                    </button>
                </div>

            </div>
        </div>

    );
}

export default ChooseCourseHistoryMethod;

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

