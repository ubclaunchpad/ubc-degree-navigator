import React from "react";
import { useNavigate } from "react-router-dom";
import ChooseMethod from "../onboarding/courseHistory/ChooseMethod";

function ChooseCourseHistoryMethod({
    transcriptMethod,
	setTranscriptMethod,
	setEnableButton 
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (transcriptMethod === 'upload') {
            navigate('/uploadCourseHistory');
        }

        if (transcriptMethod === 'manual') {
            navigate('/manualCourseHistory');
        }
      };

    return (
         <div>
            <ChooseMethod
                transcriptMethod={transcriptMethod}
                setTranscriptMethod={setTranscriptMethod}
                setEnableButton={setEnableButton}
            />
            <button onClick={handleButtonClick}>Next Step</button>
        </div>
        
    );
}

export default ChooseCourseHistoryMethod