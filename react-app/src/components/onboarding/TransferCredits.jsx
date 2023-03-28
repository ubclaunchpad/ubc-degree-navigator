import React, { useState } from "react";
import ChooseRoute from "./transferCredits/ChooseRoute";

const TransferCredits = ({ data, setData, step, setStep }) => {
	const [selected, setSelected] = useState("");

	return (
		<ChooseRoute
			data={data}
			setData={setData}
			selected={selected}
			setSelected={setSelected}
		/>
	);
};

export default TransferCredits;
