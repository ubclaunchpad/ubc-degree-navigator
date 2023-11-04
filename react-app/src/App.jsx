import React from "react";
import { useState } from "react";
import theme from "./theme";
import {
	Routes,
	Route
} from "react-router-dom";

import CourseHistory from "./components/pages/CourseHistory.jsx";
import UploadCourseHistory from "./components/pages/UploadCourseHistory.jsx";
import ManualCourseHistory from "./components/pages/ManualCourseHistory.jsx";
import CheckTransferCredits from "./components/onboarding/transferCredits/CheckTransferCredits.jsx";
import UploadTransferCredit from "./components/pages/UploadTransferCredit.jsx";
import ManualTransferCredit from "./components/pages/ManualTransferCredit.jsx";
import ChooseTransferCreditMethod from "./components/pages/ChooseTransferCreditMethod.jsx";



function App() {
	const [data, setData] = useState({
		courses: [
			["CPSC 110", "CPSC 121", "PHYS 101", "MATH 100"],
			["MATH 100", "ENGL 110", "CPSC 210", "ASTR 101"],
			["CPSC 221", "MATH 200", "STAT 200", "WRDS 150"],
			["CPSC 213", "DSCI 100", "MATH 221", "MATH 302"],
		],
		transferCredits: [{ "BIOL 1**": 3 }, { "CHIN 241": 3 }],
		program: "Bachelor of Computer Science",
		major: "Computer Science",
	});

	const [enableButton, setEnableButton] = useState(false);
	const [transcriptMethod, setTranscriptMethod] = useState("");
	const [hasTransferCredit, setHasTransferCredit] = useState("");
	const [transferCreditRoute, setTransferCreditRoute] = useState("");

	return (
		<div className="App" style={app}>
			<Routes>

				<Route path="/"
					element={<CourseHistory
						transcriptMethod={transcriptMethod}
						setTranscriptMethod={setTranscriptMethod}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/uploadCourseHistory"
					element={<UploadCourseHistory
						data={data}
						setData={setData}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/manualCourseHistory"
					element={<ManualCourseHistory
						data={data}
						setData={setData}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/transferCredit"
					element={<CheckTransferCredits
						hasTransferCredit={hasTransferCredit}
						setHasTransferCredit={setHasTransferCredit}
						setEnableButton={setEnableButton}/>}
				></Route>

				<Route path="/chooseTransferCreditMethod"
					element={<ChooseTransferCreditMethod
						transferCreditRoute={transferCreditRoute}
						setTransferCreditRoute={setTransferCreditRoute}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/uploadTransferCredit"
					element={<UploadTransferCredit
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}/>}
				></Route>

				<Route path="/manualTransferCredit"
					element={<ManualTransferCredit
						data={data}
						setData={setData}
						setEnableButton={setEnableButton} />}
				></Route>

			</Routes>
		</div>
	)
}


const app = {
	backgroundColor: theme.colors.primaryBackground,
};

export default App;
