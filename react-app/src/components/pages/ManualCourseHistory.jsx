import React from "react";
import { useNavigate } from "react-router-dom";
import EditHistory from "../onboarding/courseHistory/EditHistory";

function ManualCourseHistory(
    data,
	setData,
    setEnableButton
) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/transferCredit');
      };

    return (
        <div>
           <EditHistory
                data={data}
                setData={setData}
                setEnableButton={setEnableButton}
            />
           <button onClick={handleButtonClick}>Next Step</button>
       </div>
       
    )
}

export default ManualCourseHistory