import React, { useState } from "react";
import UploadIcon from "../../../assets/upload-cloud.svg";
import CheckIcon from "@mui/icons-material/Check";
import theme from "../../../theme";

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
	const [isUploaded, setIsUploaded] = useState(false);

	const sendFile = async (file) => {

		try {
			const response = await fetch("/api/user/upload", {
				method: "POST",
				body: file
			})

			if (!response.ok) {
				throw new Error("Failed to send file");
			}
		} catch (error) {
			console.error("Error:", error)
		}
		
	}

	const handleUpload = (e) => {
		setIsUploaded(true);

		const files = e.target.files;
		const formData = new FormData();
		formData.append('transcript', files[0]);

		sendFile(formData);
	}




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
				onChange={handleUpload}
			/>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
};

const header = {
	marginBottom: 50,
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 16,
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 18,
};

const icon = {
	width: 72,
	height: 72,
	backgroundColor: theme.colors.primaryDark,
	justifyContent: "center",
	padding: 18,
	borderRadius: 20,
};

const topper = {
	display: "flex",
	flexDirection: "row",
};

const check = {
	width: 20,
	height: 20,
	marginTop: 2,
	marginLeft: 8,
	padding: 2,
	backgroundColor: theme.colors.primaryDark,
	color: theme.colors.textLight,
	borderRadius: 10,
};

const description = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	marginLeft: 24,
};

const subSub = {
	fontFamily: theme.fonts.headerFour,
	color: theme.colors.textGrey,
	fontWeight: theme.fonts.headerFour,
	fontSize: 16,
	marginBottom: 0,
};

const method = {
	display: "flex",
	flexDirection: "row",
	marginBottom: 24,
	padding: 39,
	borderRadius: 10,
	borderColor: theme.colors.primaryDark,
};

export default UploadTranscript;
