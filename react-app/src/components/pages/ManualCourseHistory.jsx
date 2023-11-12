import React from "react";
import { useNavigate } from "react-router-dom";

import theme from "../../theme";
import page from "../../page";

import ProgressBar from "../onboarding/ProgressBar";
import EditCourseHistory from "../onboarding/courseHistory/EditCourseHistory";

function ManualCourseHistory({
    data,
    setData,
    enableButton,
    setEnableButton
}
) {
    const navigate = useNavigate();

    const previousButtonClick = () => {
        navigate('/');
        setEnableButton(false);
    };

    const nextButtonClick = () => {
        navigate('/transferCredit');
        setEnableButton(false);
    };

    return (
        <div className="body" style={page.body}>
            <ProgressBar currStepIndex={2} />

            <div className="content" style={page.content}>
                <EditCourseHistory
                    data={data}
                    setData={setData}
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

export default ManualCourseHistory;

