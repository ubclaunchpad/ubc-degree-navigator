import React from "react";
import { useNavigate } from "react-router-dom";

import page from "./page";
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
        let toSend = changeDataStructure();
        sendCourses(toSend);
        navigate('/transferCredit');
        setEnableButton(false);
    };

    const sendCourses = async (courses) => {
        try {
            const response = await fetch("http://localhost:8080/api/user/cc", {
                mode: "cors",
                method: "POST",
                body: JSON.stringify(courses)
            });

            if (!response.ok) {
                throw new Error("Failed to send courses");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    const changeDataStructure = () => {
        let ret = [];
        let courses = data.courses;
        for (let year = 1; year < courses.length; year++) {

            for (let term = 1; term < courses[year].length; term++) {
                let curr = courses[year][term];

                for (let i = 0; i < curr.length; i++) {
                    // parse department and course number digits from course name
                    // course name has structure: "ABCD 000"

                    const course = curr[i];
                    const courseName = Object.keys(course)[0];
                    const courseNameParts = courseName.split(' ');
                    const department = courseNameParts[0];
                    const numbers = courseNameParts[1].split('').map(Number);

                    // hard code userid to be 1 (because no authentication yet)
                    ret.push({
                        userid: 1,
                        yearCompleted: year,
                        sessionCompleted: term,
                        faculty: department,
                        digitOne: numbers[0],
                        digitTwo: numbers[1],
                        digitThree: numbers[2],
                        creditCounted: course[courseName]
                    })

                }
            }
        }

        return ret;
    }

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

