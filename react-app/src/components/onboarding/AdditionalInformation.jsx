import React, { useEffect } from "react";

const AdditionalInformation = ({ data, setData, setEnableButton }) => {
	useEffect(() => {
		setEnableButton(true);
	});

	return <h1>ADDITIONAL INFORMATION COMPONENT</h1>;
};

export default AdditionalInformation;
