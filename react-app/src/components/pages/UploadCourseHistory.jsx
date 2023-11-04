import React from "react";
import { useNavigate } from "react-router-dom";
import UploadTranscript from "../onboarding/courseHistory/UploadTranscript";

function UploadCourseHistory({
    data,
    setData,
    setEnableButton
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/manualCourseHistory');
      };

    return (
        <div>
           <UploadTranscript
                data={data}
                setData={setData}
                setEnableButton={setEnableButton}
            />
           <button onClick={handleButtonClick}>Next Step</button>
       </div>
       
    )
}

export default UploadCourseHistory