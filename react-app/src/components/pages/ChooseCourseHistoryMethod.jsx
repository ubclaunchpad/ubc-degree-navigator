import React from "react";
import { useNavigate } from "react-router-dom";

import page from "./page";
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

        setEnableButton(false);
    };

    return (
        <div className="body" style={page.body}>
            
            <div className="progress" style={page.progress}>
                <ProgressBar currStepIndex={0} />
            </div>

            <div className="content" style={page.content}>
                <ChooseMethod
                    transcriptMethod={transcriptMethod}
                    setTranscriptMethod={setTranscriptMethod}
                    setEnableButton={setEnableButton}
                />

                <div className="buttons" style={page.buttons}>
                    <button
                        style={
                            enableButton
                                ? page.nextButton
                                : page.disabledButton
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
