import React, { useState } from "react";
import theme from "../../theme";
import ChooseMethod from "./courseHistory/ChooseMethod";
import UploadTranscript from "./courseHistory/UploadTranscript";

const CourseHistory = ({ data, setData, setStep }) => {
	const [methodSelected, setMethodSelected] = useState();

	return (
		<div>
			{!methodSelected ? (
				<ChooseMethod
					methodSelected={methodSelected}
					setMethodSelected={setMethodSelected}
				/>
			) : (
				<div>
					{methodSelected === "upload" ? (
						<UploadTranscript data={data} setData={setData} />
					) : (
						<div>asdf</div>
					)}
				</div>
			)}
		</div>
	);
};

export default CourseHistory;
