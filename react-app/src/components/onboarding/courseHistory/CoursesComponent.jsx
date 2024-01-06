import React, { useState } from "react";
import theme from "../../../theme";
import CancelIcon from "@mui/icons-material/Cancel";

const CourseComponent = ({ data, setData, indexKey }) => {
	// data is array of two terms [[courses taken term 1], [courses taken term 2]]

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
			data[0].forEach((val) => {
				tempCourseListOne.push(
					<div key={val + "1"} id={val + "1"} style={chip}>
						<p style={chipText}>{val}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCourse(val, "1")}
						></CancelIcon>
					</div>
				);
			});
		}

		if (courseListTwo.length === 0) {
			data[1].forEach((val) => {
				tempCourseListTwo.push(
					<div key={val + "1"} id={val + "1"} style={chip}>
						<p style={chipText}>{val}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCourse(val, "1")}
						></CancelIcon>
					</div>
				);
			});
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

	const handleEnter = (e, num) => {
		if (e.key === "Enter") {
			let val = document.getElementById(indexKey + num).value;
			num === "1" ? addCourseListOne(val) : addCourseListTwo(val);

			let newCourse;
			if (data[num]) {
				newCourse = data[num].push(val);
			} else {
				newCourse = data.push([val]);
			}

			setData((prev) => ({
				data: {
					...prev.data,
					// courses: newCourse,
				},
			}));

			//console.log(courseListOne);
		}
	};

	const removeCourse = (val, num) => {
		//console.log(courseListOne);

		/*let index = courseListOne.findIndex((c) => {
			c.key === "CPSC 1011";
		});*/
		let index = 0;

		//console.log(index);
		//console.log()

		if (num === "1") {
			setCourseListOne(courseListOne.filter((_, i) => i !== index));
		} else {
			setCourseListTwo(courseListTwo.filter((_, i) => i !== index));
		}

		let newIndex = data.courses.indexOf(val);
		let newCourse = data.courses.splice(newIndex, 1);
		setData((prev) => ({
			data: {
				...prev.data,
				courses: newCourse,
			},
		}));
	};

	if (courseListOne.length === 0 && courseListTwo.length === 0)
		initCourseList();

	return (
		<div style={container}>
			<div style={year}>
				<p style={{ ...subHeading, ...{ marginBottom: 0 } }}>
					Year {Number(indexKey) + 1}
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
	flexShrink: "1",
	fontSize: "2vh",
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 10,
	padding: "6vh 6vh 0vh 6vh",
	boxShadow:
		"0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
	boxSizing: "border-box",
	height: "60vh",
};

const year = { 
	display: "flex", 
	flexDirection: "column",
};

const subHeading = {
	fontFamily: theme.fonts.headerFourMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerFourMedium,
	marginBottom: "2.4vh",
};

const divider = {
	width: "100%",
	border: "1px solid #E7E7E7",
};

const term = {
	display: "flex",
	flexDirection: "column",
	marginBottom: "8vh",
};

const courses = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: "3vh",
	height: "5vh"
};

const courseInput = {
	height: "5vh",
	width: "15vh",
	fontFamily: theme.fonts.buttons,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.buttons,
	borderColor: theme.colors.textDark,
	borderRadius: "1vh",
	backgroundColor: "#EEF5FC",
};

const addButton = {
	color: theme.colors.primaryDark,
	height: "5vh",
	width: "15vh",
	borderWidth: 1,
	borderColor: theme.colors.primaryDark,
	borderRadius: "1vh",
	backgroundColor: theme.colors.primaryLightBackground,
};

const chip = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	height: "0",
	width: "16vh",
	padding: "2.5vh 0vh",
	borderRadius: "1vh",
	backgroundColor: "#EEF5FC",
};
const chipText = {
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	margin: "0 1vh 0 0",
};
const chipIcon = {
	width: "2.5vh",
	height: "auto",
	color: theme.colors.primaryDark,
};

export default CourseComponent;
