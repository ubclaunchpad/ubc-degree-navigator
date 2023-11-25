import React, { useState } from "react";
import UploadIcon from "../../../assets/upload-cloud.svg";
import CheckIcon from "@mui/icons-material/Check";
import theme from "../../../theme";
import { container, header, title, subTitle, icon, description, topper, check, subSub } from "./UploadTranscriptStyles";

const UploadTranscript = ({ data, setData, setEnableButton }) => {
	const useHover = () => {
		const [isHover, setIsHover] = useState(false);

		const handleMouseEnter = () => {
			setIsHover(true);
		};

		const handleMouseLeave = () => {
			setIsHover(false);
		};

		return [isHover, handleMouseEnter, handleMouseLeave];
	};

	const [isHover1, handleMouseEnter1, handleMouseLeave1] = useHover();

	const method = {
		display: "flex",
		flexDirection: "row",
		marginBottom: 24,
		padding: 39,
		borderRadius: 10,
		borderColor: theme.colors.primaryDark,
	};

	const [isUploaded, setIsUploaded] = useState(false);

	/* TODO: Uncomment after implementing file upload
  if (isUploaded) {
    setEnableButton(true);
  }
  */

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Upload your transcript
				</h1>
				<p className="subTitle" style={subTitle}>
					Please upload a screenshot of your transcript that can be found under
					“Your Grade Summary” on the{" "}
					<a href="https://ssc.adm.ubc.ca/">Student Service Centre website</a>.{" "}
					<br />
					<br />
					Your screenshot should include courses from “All Sessions” and only
					include the transcript table. Still unsure what you need? Here is an
					example!
				</p>
			</div>

			<label htmlFor="actual-btn">
				<div
					className="method"
					style={{
						...method,
						...{
							backgroundColor: isHover1
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
							borderWidth: isHover1 ? 1 : 0,
						},
					}}
					onMouseEnter={handleMouseEnter1}
					onMouseLeave={handleMouseLeave1}
					onClick={() => {
						setEnableButton(true);
					}}
				>
					<div style={icon}>
						<img src={UploadIcon} alt="upload icon" />
					</div>
					<div className="description" style={description}>
						<div style={topper}>
							<p className="subTitle" style={subTitle}>
								File Upload
							</p>
							{isUploaded ? <CheckIcon style={check} /> : <br />}
						</div>

						<p style={subSub}>Accepted formats: JPEG, JPG, PNG.</p>
					</div>
				</div>
			</label>

			<input
				type="file"
				id="actual-btn"
				style={{ display: "none", pointerEvents: "none" }}
				onChange={() => setIsUploaded(true)}
			/>
		</div>
	);
};

export default UploadTranscript;
