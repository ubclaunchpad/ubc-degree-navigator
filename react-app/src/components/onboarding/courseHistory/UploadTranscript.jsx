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
						<img src={UploadIcon} alt="upload icon" style={illustration}/>
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

const container = {
	display: "flex",
	flexDirection: "column",
	flexShrink: "1",
	height: "88vh",
	width: "90%",
};

const header = {
	marginTop: "10vh",
	width: "100%",
	height: "30vh"
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: "4.5vh",
	marginBottom: "2.5vh",
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: "2.4vh",
	marginBottom: "1vh",
};

const method = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start",
	width: "100%",
	height: "20vh",
	borderRadius: "5%",
	borderColor: theme.colors.primaryDark,
	marginTop: "2.5vh",
};

const icon = {
	display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "10vh",
    height: "0",
    paddingTop: "5vh",
    paddingBottom: "5vh",
	backgroundColor: theme.colors.primaryDark,
	borderRadius: "2vh",
	marginLeft: "3vh",
};

const illustration = {
	width: "50%",
	height: "auto",
};

const topper = {
	display: "flex",
	flexDirection: "row",
};

const check = {
	backgroundColor: theme.colors.primaryDark,
	color: theme.colors.textLight,
	width: "2.5vh",
	height: "2.5vh",
	padding: "1%",
	marginTop: "0.5vh",
	marginLeft: "1vh",
	borderRadius: "1.5vh",
};

const description = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	marginLeft: "3vh",
};

const subSub = {
	fontFamily: theme.fonts.headerFour,
	color: theme.colors.textGrey,
	fontWeight: theme.fonts.headerFour,
	fontSize: "2vh",
};
export default UploadTranscript;
