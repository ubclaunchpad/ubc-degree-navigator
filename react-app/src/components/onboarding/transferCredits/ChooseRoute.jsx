import React, { useState, useEffect } from "react";
import UploadIcon from "../../../assets/upload-cloud.svg";
import ManualIcon from "../../../assets/playlist_add.svg";
import theme from "../../../theme";

const ChooseRoute = ({
	transferCreditRoute,
	setTransferCreditRoute,
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
					How would you like to add your transfer credits?
				</h1>
			</div>

			<div
				className="method"
				style={{
					...method,
					...{
						backgroundColor:
							isHover1 || transferCreditRoute == "upload"
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover1 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter1}
				onMouseLeave={handleMouseLeave1}
				onClick={() => {
					setTransferCreditRoute("upload");
					setEnableButton(true);
				}}
			>
				<div style={icon}>
					<img src={UploadIcon} alt="upload icon" />
				</div>
				<div className="description" style={description}>
					<p className="subTitle" style={subTitle}>
						Upload transfer credit (Recommended)
					</p>
					<p style={subSub}>
						Upload a screenshot of transfer credits — you can still manually
						edit later.
					</p>
				</div>
			</div>

			<div
				className="method"
				style={{
					...method,
					...{
						backgroundColor:
							isHover2 || transferCreditRoute == "manual"
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover2 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter2}
				onMouseLeave={handleMouseLeave2}
				onClick={() => {
					setTransferCreditRoute("manual");
					setEnableButton(true);
				}}
			>
				<div style={{ ...icon, padding: 25 }}>
					<img src={ManualIcon} alt="manual icon" />
				</div>
				<div className="description" style={description}>
					<p className="subTitle" style={subTitle}>
						Add transfer credits manually
					</p>
					<p style={subSub}>This option will take longer!</p>
				</div>
			</div>
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

export default ChooseRoute;
