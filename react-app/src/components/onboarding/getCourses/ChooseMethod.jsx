import React, { useState } from "react";
import UploadIcon from "../../../assets/upload-cloud.svg";
import ManualIcon from "../../../assets/playlist_add.svg";
import theme from "../../../theme";
import { container, header, title, subTitle, icon, description, subSub } from "./ChooseMethodStyles";

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

	const method = {
		display: "flex",
		flexDirection: "row",
		marginBottom: 24,
		padding: 39,
		borderRadius: 10,
		borderColor: theme.colors.primaryDark,
	};

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
					<img src={UploadIcon} alt="upload icon" />
				</div>
				<div className="description" style={description}>
					<p className="subTitle" style={subTitle}>
						Upload transcript (Recommended)
					</p>
					<p style={subSub}>
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
				<div style={{ ...icon, padding: 25 }}>
					<img src={ManualIcon} alt="manual icon" />
				</div>
				<div className="description" style={description}>
					<p className="subTitle" style={subTitle}>
						Add courses manually
					</p>
					<p style={subSub}>This option will take longer!</p>
				</div>
			</div>
		</div>
	);
};

export default ChooseMethod;
