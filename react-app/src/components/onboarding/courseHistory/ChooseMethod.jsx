import React, { useState } from "react";
import UploadIcon from "../../../assets/upload-cloud.svg";
import ManualIcon from "../../../assets/playlist_add.svg";

import theme from "../../../theme";
import "./ChooseMethod.css";

const ChooseMethod = ({
	transcriptMethod,
	setTranscriptMethod,
	setEnableButton,
}) => {
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
	const [isHover2, handleMouseEnter2, handleMouseLeave2] = useHover();

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Choose a way to get started
				</h1>
				<p className="subTitle" style={subTitle}>
					First, we will need your course history.
				</p>
			</div>

			<div
				className="method"
				style={{
					...method,
					...{
						backgroundColor:
							isHover1 || transcriptMethod === "upload"
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover1 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter1}
				onMouseLeave={handleMouseLeave1}
				onClick={() => {
					setTranscriptMethod("upload");
					setEnableButton(true);
				}}
			>
				<div style={icon}>
					<img src={UploadIcon} alt="upload icon" style={illustration}/>
				</div>
				<div className="description" style={description}>
					<p className="subTitle" style={subTitle}>
						Upload transcript (Recommended)
					</p>
					<p className="subSub" style={subSub}>
						Upload a screenshot of transcript — you can still manually edit your
						courses later.
					</p>
				</div>
			</div>

			<div
				className="method"
				style={{
					...method,
					...{
						backgroundColor:
							isHover2 || transcriptMethod === "manual"
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover2 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter2}
				onMouseLeave={handleMouseLeave2}
				onClick={() => {
					setTranscriptMethod("manual");
					setEnableButton(true);
				}}
			>
				<div style={icon}>
					<img src={ManualIcon} alt="manual icon" style={illustration}/>
				</div>
				<div className="description" style={description}>
					<p className="subTitle" style={subTitle}>
						Add courses manually
					</p>
					<p className="subSub" style={subSub}>This option will take longer!</p>
				</div>
			</div>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%",
};

const header = {
	marginTop: "5%",
	marginBottom: "5%",
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	paddingBottom: "2%",
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	marginBottom: "0.5%",
};

const method = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	marginBottom: "3%",
	padding: "2.5%",
	borderRadius: "5%",
	borderColor: theme.colors.primaryDark,
};

const icon = {
	display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    height: "0%",
    paddingTop: "5%",
    paddingBottom: "5%",
	backgroundColor: theme.colors.primaryDark,
	borderRadius: "20%",
};

const description = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	width: "76%",
	marginLeft: "4%",
};

const subSub = {
	fontFamily: theme.fonts.headerFour,
	color: theme.colors.textGrey,
	fontWeight: theme.fonts.headerFour,
	marginBottom: 0,
};

const illustration = {
	width: "50%",
	height: "auto",
}

export default ChooseMethod;
