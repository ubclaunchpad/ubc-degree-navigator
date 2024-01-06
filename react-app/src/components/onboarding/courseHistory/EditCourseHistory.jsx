import React, { useState, useEffect } from "react";
import theme from "../../../theme";
import CourseComponent from "./CoursesComponent";

const EditCourseHistory = ({ data, setData, setEnableButton }) => {
	useEffect(() => {
		setEnableButton(true);
	});

	const [years, setYears] = useState([]);

	const init = () => {
		if (years.length !== 0) {
			return years;
		}

		let split = data.courses.reduce(function (result, value, index, array) {
			if (index % 2 === 0) result.push(array.slice(index, index + 2));
			return result;
		}, []);

		let tempYear = [];
		split.forEach((year, i) => {
			tempYear.push(
				<CourseComponent
					key={`${split.indexOf(year)}`}
					data={year}
					setData={setData}
					indexKey={`${split.indexOf(year)}`}
				></CourseComponent>
			);
		});

		setYears(tempYear);

		return years;
	};

	const addYear = () => {
		setYears(
			years.concat(
				<CourseComponent
					key={years.length}
					data={[]}
					setData={setData}
					indexKey={years.length}
				></CourseComponent>
			)
		);
	};

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
			<div style={components}>
				{init()}

				<div style={buttonWrapper}>
				<button style={button} onClick={() => addYear()}>
					Add a new academic year →
				</button>
			</div>
			</div>
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
	margin: "5vh 0vh 0vh 0vh",
	height: "20vh"
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: "4.5vh",
	marginBottom: "2vh",
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: "2.8vh",
};

const components = {
	display: "flex",
	flexDirection: "column",
	flexShrink: "1",
	overflow: "scroll",
	height: "70vh",
	gap: "4vh",
	margin: "0vh 0vh 3vh 0vh",
};

const buttonWrapper = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	marginBottom: "2vh",
};

const button = {
	padding: "1.5vh 2.5vh",
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: "1.8vh",
	borderWidth: 0,
	borderRadius: "1.5vh",
	backgroundColor: theme.colors.primaryLightBackground,
	boxShadow:
		"0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};

export default EditCourseHistory;
