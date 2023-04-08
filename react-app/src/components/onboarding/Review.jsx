import React, { useEffect } from "react";
import theme from "../../theme";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Review = ({ data, setData, setEnableButton }) => {
	useEffect(() => {
		setEnableButton(true);
	});

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Review your information
				</h1>
			</div>

			<div className="field" style={field}>
				<div className="field-header" style={fieldHeader}>
					<h3 style={fieldTitle}>Your Courses</h3>
					<BorderColorIcon
						style={icon}
						onClick={() => {
							console.log("do something");
						}}
					/>
				</div>
				<div style={fieldContent}>
					{data.courses.length === 0 ? (
						<div></div>
					) : (
						<div>can edit Courses</div>
					)}
				</div>
			</div>

			<hr style={hrStyle} />

			<div className="field" style={field}>
				<div className="field-header" style={fieldHeader}>
					<h3 style={fieldTitle}>Transfer Credits</h3>
					<BorderColorIcon
						style={icon}
						onClick={() => {
							console.log("do something");
						}}
					/>
				</div>
				<div style={fieldContent}>
					{data.transferCredits.length === 0 ? (
						<div></div>
					) : (
						<div>can edit transfer credits</div>
					)}
				</div>
			</div>

			<hr style={hrStyle} />

			<div className="field" style={field}>
				<div className="field-header" style={fieldHeader}>
					<h3 style={fieldTitle}>Additional Information</h3>
					<BorderColorIcon
						style={icon}
						onClick={() => {
							console.log("do something");
						}}
					/>
				</div>
				<div style={fieldContent}>
					{Object.keys(data.degreeInfo).length === 0 ? (
						<div></div>
					) : (
						<div>can edit degree information</div>
					)}
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
	marginBottom: 30,
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 16,
};

const field = {
	display: "flex",
	flexDirection: "column",
};

const fieldHeader = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
};

const fieldTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 20,
	paddingBottom: 8,
	paddingRight: 8,
};

const icon = {
	width: 24,
	height: 24,
};

const fieldContent = {};

const hrStyle = {
	width: "100%",
	border: "1px solid #E7E7E7",
};

export default Review;
