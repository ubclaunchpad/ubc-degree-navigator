import React, { useEffect } from "react";

const Review = ({ data, setData, setEnableButton }) => {
	useEffect(() => {
		setEnableButton(true);
	});

	return <h1>REVIEW COMPONENT</h1>;
};

export default Review;
