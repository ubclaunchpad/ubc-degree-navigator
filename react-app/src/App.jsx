import React from "react";
import { useState } from "react";
import theme from "./theme";
import {
	Routes,
	Route
} from "react-router-dom";

import ChooseCourseHistoryMethod from "./components/pages/ChooseCourseHistoryMethod.jsx";
import UploadCourseHistory from "./components/pages/UploadCourseHistory.jsx";
import ManualCourseHistory from "./components/pages/ManualCourseHistory.jsx";
import TransferCredit from "./components/pages/TransferCredit.jsx";
import UploadTransferCredit from "./components/pages/UploadTransferCredit.jsx";
import ManualTransferCredit from "./components/pages/ManualTransferCredit.jsx";
import ChooseTransferCreditMethod from "./components/pages/ChooseTransferCreditMethod.jsx";
import ProgramInformation from "./components/pages/ProgramInformation.jsx";
import ResultsPage from "./components/pages/ResultsPage.jsx";



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
					element={<ChooseCourseHistoryMethod
						transcriptMethod={transcriptMethod}
						setTranscriptMethod={setTranscriptMethod}
						enableButton={enableButton}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/uploadCourseHistory"
					element={<UploadCourseHistory
						data={data}
						setData={setData}
						enableButton={enableButton}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/manualCourseHistory"
					element={<ManualCourseHistory
						data={data}
						setData={setData}
						enableButton={enableButton}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/transferCredit"
					element={<TransferCredit
						hasTransferCredit={hasTransferCredit}
						setHasTransferCredit={setHasTransferCredit}
						enableButton={enableButton}
						setEnableButton={setEnableButton}/>}
				></Route>

				<Route path="/chooseTransferCreditMethod"
					element={<ChooseTransferCreditMethod
						transferCreditRoute={transferCreditRoute}
						setTransferCreditRoute={setTransferCreditRoute}
						enableButton={enableButton}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/uploadTransferCredit"
					element={<UploadTransferCredit
						data={data}
						setData={setData}
						enableButton={enableButton}
						setEnableButton={setEnableButton}/>}
				></Route>

				<Route path="/manualTransferCredit"
					element={<ManualTransferCredit
						data={data}
						setData={setData}
						enableButton={enableButton}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/programInformation"
					element={<ProgramInformation
						data={data}
						setData={setData}
						enableButton={enableButton}
						setEnableButton={setEnableButton} />}
				></Route>

				<Route path="/results"
					element={<ResultsPage
						data={data}
						setData={setData} />}
				></Route>

			</Routes>
		</div>
	)
}


const app = {
	backgroundColor: theme.colors.primaryBackground,
};

export default App;
