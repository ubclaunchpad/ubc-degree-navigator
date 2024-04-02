import React, { useState, useEffect } from "react";
import theme from "../../../theme";
import CancelIcon from "@mui/icons-material/Cancel";

const CourseComponent = ({ data, setData, indexKey }) => {
	// indexKey = academic year
	// data.courses[indexKey] = [[], [courses taken term 1], [courses taken term 2]]

	if (data.courses.length === 0) {
		// case: user manually inputs course history from start

		data.courses[1] = [[], [], []];

	} else if (indexKey >= data.courses.length) {
		// case: user clicks on "add year" button

		data.courses.push([[], [], []]);
	}

	const [showInputOne, setShowInputOne] = useState(false);
	const [showAddOne, setShowAddOne] = useState(true);
	const [showInputTwo, setShowInputTwo] = useState(false);
	const [showAddTwo, setShowAddTwo] = useState(true);
	const [termOneList, setTermOneList] = useState(data.courses[indexKey][1]);
	const [termTwoList, setTermTwoList] = useState(data.courses[indexKey][2]);

	const TermOneComponent = ({ data }) => (
		data.map((course, index) => (
			<div key={course + "1"} id={course + "1"} style={chip}>
				<p style={chipText}>{course}</p>
				<CancelIcon
					style={chipIcon}
					onClick={() => {
						removeCourse("1", index)
					}}
				></CancelIcon>
			</div>
		))
	)

	const TermTwoComponent = ({ data }) => (
		data.map((course, index) => (
			<div key={course + "2"} id={course + "2"} style={chip}>
				<p style={chipText}>{course}</p>
				<CancelIcon
					style={chipIcon}
					onClick={() => {
						removeCourse("2", index)
					}}
				></CancelIcon>
			</div>
		))
	)

	const handleEnter = (e, term) => {
		if (e.key === "Enter") {
			let val = document.getElementById(indexKey + term).value;

			let updatedCourses;

			if (term === "1") {
				updatedCourses = [...termOneList];
				updatedCourses.push(val);
				setTermOneList(updatedCourses);
				setShowInputOne(false);
				setShowAddOne(true);
			} else {
				updatedCourses = [...termTwoList];
				updatedCourses.push(val);
				setTermTwoList(updatedCourses);
				setShowInputTwo(false);
				setShowAddTwo(true);
			}
		}
	};

	const removeCourse = (term, courseIndex) => {
		let updatedCourses;

		if (term === "1") {
			updatedCourses = [...termOneList];
			updatedCourses = updatedCourses.filter((_, i) => i !== courseIndex);
			setTermOneList(updatedCourses);
		} else {
			updatedCourses = [...termTwoList];
			updatedCourses = updatedCourses.filter((_, i) => i !== courseIndex);
			setTermTwoList(updatedCourses);
		}
	};

	useEffect(() => {
		let dataCourses = [...data.courses];
		dataCourses[indexKey][1] = termOneList;
		dataCourses[indexKey][2] = termTwoList;

		let newObject = {
			...data,
			courses: dataCourses
		}

		setData(newObject);
		
	}, [termOneList, termTwoList]);
	

	return (
		<div style={container}>

			<div style={year}>
				<p style={{ ...subHeading, ...{ marginBottom: 0 } }}>
					Year {Number(indexKey)}
				</p>
			</div>

			<hr style={divider} />

			<div style={term}>
				<p style={subHeading}>Term 1</p>

				<div style={courses}>
					{showInputOne && (
						<input
							id={indexKey + "1"}
							type="text"
							style={courseInput}
							onKeyDown={(e) => handleEnter(e, "1")}
						></input>
					)}

					<TermOneComponent data={termOneList}></TermOneComponent>

					{showAddOne && (
						<button
							style={addButton}
							onClick={() => {
								setShowInputOne(true);
								setShowAddOne(false);
							}}
						>
							+
						</button>
					)}
				</div>
			</div>

			<div style={term}>
				<p style={subHeading}>Term 2</p>

				<div style={courses}>
					{showInputTwo && (
						<input
							id={indexKey + "2"}
							type="text"
							style={courseInput}
							onKeyDown={(e) => handleEnter(e, "2")}
						></input>
					)}

					<TermTwoComponent data={termTwoList}></TermTwoComponent>

					{showAddTwo && (
						<button
							style={addButton}
							onClick={() => {
								setShowInputTwo(true);
								setShowAddTwo(false);
							}}
						>
							+
						</button>
					)}
				</div>
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
	marginBottom: 16,
};

const divider = {
	width: "100%",
	border: "1px solid #E7E7E7",
};

const term = {
	display: "flex",
	flexDirection: "column",
	marginBottom: 40,
};

const courses = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: "20px",
};

const courseInput = {
	paddingLeft: 10,
	height: 32,
	width: 240,
	fontFamily: theme.fonts.buttons,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.buttons,
	borderColor: theme.colors.textDark,
	borderRadius: 5,
	backgroundColor: "#EEF5FC",
};

const addButton = {
	color: theme.colors.primaryDark,
	fontSize: 18,
	height: 32,
	width: 46,
	borderWidth: 1,
	borderColor: theme.colors.primaryDark,
	borderRadius: 5,
	backgroundColor: theme.colors.primaryLightBackground,
};

const chip = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	height: 32,
	width: 126,
	borderRadius: 4,
	backgroundColor: "#EEF5FC",
	//width: "fit-content",
};
const chipText = {
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: 14,
	paddingRight: 6,
	margin: 0,
};
const chipIcon = {
	width: 16,
	height: 16,
	color: theme.colors.primaryDark,
};

export default CourseComponent;
