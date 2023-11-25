import React, { useState, useEffect } from "react";
import CourseComponent from "./CoursesComponent";
import { container, header, title, subTitle, components, buttonWrapper, button } from "./EditHistoryStyles";

const EditHistory = ({ data, setData, setEnableButton }) => {
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
			<div style={components}>{init()}</div>
			<div style={buttonWrapper}>
				<button style={button} onClick={() => addYear()}>
					Add a new academic year →
				</button>
			</div>
		</div>
	);
};

export default EditHistory;
