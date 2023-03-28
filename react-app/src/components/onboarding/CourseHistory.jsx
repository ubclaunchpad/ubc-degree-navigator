import React, { useState } from "react";
import ChooseMethod from "./courseHistory/ChooseMethod";
import EditHistory from "./courseHistory/EditHistory";
import UploadTranscript from "./courseHistory/UploadTranscript";

const CourseHistory = ({ data, setData, setStep, setShowButton }) => {
	const [methodSelected, setMethodSelected] = useState();

	return (
		<div>
			{!methodSelected ? (
				<ChooseMethod
					methodSelected={methodSelected}
					setMethodSelected={setMethodSelected}
					setShowButton={setShowButton}
					setStep={setStep}
				/>
			) : (
				<div>
					{methodSelected === "upload" ? (
						<UploadTranscript
							data={data}
							setData={setData}
							setShowButton={setShowButton}
							setStep={setStep}
							setMethodSelected={setMethodSelected}
						/>
					) : (
						<EditHistory
							data={data}
							setData={setData}
							setShowButton={setShowButton}
							setStep={setStep}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default CourseHistory;
