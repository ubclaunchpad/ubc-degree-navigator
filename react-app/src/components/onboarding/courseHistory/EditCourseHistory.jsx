import React, { useState, useEffect } from "react";
import theme from "../../../theme";
import CourseComponent from "./CoursesComponent";

const EditCourseHistory = ({ data, setData, setEnableButton }) => {
	useEffect(() => {
		setEnableButton(true);
	});

	const [years, setYears] = useState([]);

	const init = () => {
		if (years.length == 0) {
			let tempYear = [];
			for (let i = 1; i < data.courses.length; i++) {
				tempYear.push(
					<CourseComponent
						key={i}
						indexKey={i}
						data={data.courses[i]}
						setData={setData}
					>
					</CourseComponent>
				)
			}

			setYears(tempYear);
		}
		return years;
	};

	const addYear = () => {
		setYears(
			years.concat(
				<CourseComponent
					key={years.length}
					indexKey={years.length}
					data={[]}
					setData={setData}
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
			<div style={components}>{init()}</div>
			<div style={buttonWrapper}>
				<button style={button} onClick={() => addYear()}>
					Add a new academic year →
				</button>
			</div>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
};

const header = {
	marginBottom: 24,
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

const components = {
	display: "flex",
	flexDirection: "column",
	gap: "24px",
	marginBottom: "36px",
};

const buttonWrapper = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	marginBottom: "24px",
};

const button = {
	padding: "8px 24px",
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: 14,
	borderWidth: 0,
	borderRadius: 4,
	backgroundColor: theme.colors.primaryLightBackground,
	boxShadow:
		"0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};

export default EditCourseHistory;

/*
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
 */
