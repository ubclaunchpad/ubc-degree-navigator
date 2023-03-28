import React, { useState } from "react";
import theme from "../../../theme";

const EditHistory = ({ data, setData, setShowButton, setStep }) => {
	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Your course history
				</h1>
				<p className="subTitle" style={subTitle}>
					Here are your courses based on your transcript. Add, edit, or remove
					courses.
				</p>
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

export default EditHistory;
