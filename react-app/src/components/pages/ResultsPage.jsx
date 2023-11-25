import React from "react";
import { useNavigate } from "react-router-dom";

import page from "./page";
import ProgressBar from "../onboarding/ProgressBar";
import Results from "../onboarding/Results";

function ResultsPage({
    data,
    setData,
    setEnableButton
}) {
    const navigate = useNavigate();

    const previousButtonClick = () => {
        navigate('/programInformation');
        setEnableButton(false);
    }

    return (
        <div className="body" style={page.body}>
            <ProgressBar currStepIndex={8} />

            <div className="content" style={page.content}>
                <Results
                    data={data}
                    setData={setData}
                />

                <div className="buttons" style={page.buttons}>
                    <button
                        style={page.prevButton}
                        onClick={previousButtonClick}>
                        Previous Step
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ResultsPage;
