import React from "react";
import theme from "../../../theme";

const CourseComponent = ({ data, setData }) => {
	return (
		<div style={container}>
			<div style={year}>
				<p style={subHeading}>Year 1</p>
			</div>
			<hr style={divider} />
			<div style={term}>
				<p style={subHeading}>Term 1</p>
				<div style={courses}>
					{
						// map courses to create course chips
					}
				</div>
				<p style={subHeading}>Term 2</p>
				<div style={courses}></div>
			</div>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 10,
	padding: "32px 36px",
	boxShadow:
		"0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};

const year = { display: "flex", flexDirection: "column" };

const subHeading = {
	fontFamily: theme.fonts.headerFourMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerFourMedium,
	fontSize: 14,
	paddingBottom: 16,
};

const divider = {
	width: "100%",
	border: "1px solid #E7E7E7",
};

const term = { display: "flex", flexDirection: "column" };

const courses = { display: "flex", flexDirection: "row" };

export default CourseComponent;
