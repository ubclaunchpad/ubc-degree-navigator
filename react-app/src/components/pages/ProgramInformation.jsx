import React from "react";
import { useNavigate } from "react-router-dom";

import page from "./page";
import ProgressBar from "../onboarding/ProgressBar";
import AdditionalInformation from "../onboarding/AdditionalInformation";

function ProgramInformation({
    data,
    setData,
    enableButton,
    setEnableButton
}) {
    const navigate = useNavigate();

    const previousButtonClick = () => {
        navigate('/manualTransferCredit');
        setEnableButton(false);
    }

    const nextButtonClick = () => {
        navigate('/results');
        setEnableButton(false);
      };

    return (
        <div className="body" style={page.body}>
            <ProgressBar currStepIndex={7} />

            <div className="content" style={page.content}>
            <AdditionalInformation
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
        
    );
}

export default ProgramInformation;

