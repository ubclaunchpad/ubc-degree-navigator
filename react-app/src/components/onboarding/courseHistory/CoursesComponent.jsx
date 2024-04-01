import React, { useState } from "react";
import theme from "../../../theme";
import CancelIcon from "@mui/icons-material/Cancel";

const CourseComponent = ({ data, setData, indexKey }) => {
	// data.courses[indexKey]: [[], [courses taken term 1], [courses taken term 2]]

	const [courseListOne, setCourseListOne] = useState([]);
	const [showInputOne, setShowInputOne] = useState(false);
	const [showAddOne, setShowAddOne] = useState(true);
	const [courseListTwo, setCourseListTwo] = useState([]);
	const [showInputTwo, setShowInputTwo] = useState(false);
	const [showAddTwo, setShowAddTwo] = useState(true);

	const initCourseList = () => {
		if (data.length === 0) {
			return;
		}

		let tempCourseListOne = [];
		let tempCourseListTwo = [];
		if (courseListOne.length === 0) {
			let termCourses = data.courses[indexKey][1];

			for (let i = 0; i < termCourses.length; i++) {
				let val = termCourses[i];

				tempCourseListOne.push(
					<div key={val + "1"} id={val + "1"} style={chip}>
						<p style={chipText}>{val}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCourse("1", i)}
						></CancelIcon>
					</div>
				);
			}
		}

		if (courseListTwo.length === 0) {
			let termCourses = data.courses[indexKey][2];

			for (let i = 0; i < termCourses.length; i++) {
				let val = termCourses[i];

				tempCourseListTwo.push(
					<div key={val + "2"} id={val + "2"} style={chip}>
						<p style={chipText}>{val}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCourse("2", i)}
						></CancelIcon>
					</div>
				);
			}
		}

		setCourseListOne(tempCourseListOne);
		setCourseListTwo(tempCourseListTwo);
	};

	const addCourseListOne = (val) => {
		if (document.getElementById(indexKey + "1")) {
			document.getElementById(indexKey + "1").value = "";
		}
		setCourseListOne(
			courseListOne.concat(
				<div key={val + "1"} id={val + "1"} style={chip}>
					<p style={chipText}>{val}</p>
					<CancelIcon
						style={chipIcon}
						onClick={() => removeCourse(val, "1")}
					></CancelIcon>
				</div>
			)
		);
		setShowInputOne(false);
		setShowAddOne(true);
	};

	const addCourseListTwo = (val) => {
		if (document.getElementById(indexKey + "2")) {
			document.getElementById(indexKey + "2").value = "";
		}
		setCourseListTwo(
			courseListTwo.concat(
				<div key={val + "2"} id={val + "2"} style={chip}>
					<p style={chipText}>{val}</p>
					<CancelIcon
						style={chipIcon}
						onClick={() => removeCourse(val, "2")}
					></CancelIcon>
				</div>
			)
		);
		setShowInputTwo(false);
		setShowAddTwo(true);
	};

	const handleEnter = (e, term) => {
		if (e.key === "Enter") {
			let val = document.getElementById(indexKey + term).value;
			term === "1" ? addCourseListOne(val) : addCourseListTwo(val);

			let newCourses = data.courses[indexKey][term].push(val);

			setData((prev) => ({
				data: {
					...prev.data,
					courses: newCourses
				},
			}));
		}
	};

	const removeCourse = (term, courseIndex) => {
		let newCourses = data.courses[indexKey][term].filter((_, i) => i !== courseIndex);

		setData((prev) => ({
			data: {
				...prev.data,
				courses: newCourses
			},
		}));

		if (term === "1") {
			let tempCourseListOne = [];
			for (let i = 0; i < newCourses.length; i++) {
				let val = newCourses[i];

				tempCourseListOne.push(
					<div key={val + "1"} id={val + "1"} style={chip}>
						<p style={chipText}>{val}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCourse("1", i)}
						></CancelIcon>
					</div>
				);
			}
			setCourseListOne(tempCourseListOne);
		} else {
			let tempCourseListTwo = [];
			for (let i = 0; i < newCourses.length; i++) {
				let val = newCourses[i];

				tempCourseListTwo.push(
					<div key={val + "1"} id={val + "1"} style={chip}>
						<p style={chipText}>{val}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCourse("2", i)}
						></CancelIcon>
					</div>
				);
			}
			setCourseListTwo(tempCourseListTwo);
		}	
	};

	if (courseListOne.length === 0 && courseListTwo.length === 0) {
		initCourseList();
	}

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
					{courseListOne}
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
					{courseListTwo}
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
