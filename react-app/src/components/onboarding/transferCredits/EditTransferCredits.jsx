import React, { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { detail, chip, chipText, chipIcon, container, header, title, subTitle, body, creditInput, addButton } from "./EditTransferCreditStyles";

const EditTransferCredits = ({ data, setData, setEnableButton }) => {
	const [creditList, setCreditList] = useState([]);
	const [showInput, setShowInput] = useState(false);
	const [showAdd, setShowAdd] = useState(true);

	useEffect(() => {
		initCredits();
	}, []);

	useEffect(() => {
		setEnableButton(true);
		renderCredits();
	}, [creditList]);

	let initCredits = () => {
		setCreditList(data.transferCredits);
	};

	let renderCredits = () => {
		let tempList = [];
		console.log("line 25");
		console.log(creditList);
		creditList.forEach((element) => {
			let [key, val] = Object.entries(element)[0];
			tempList.push(
				<div key={key} style={detail}>
					<div id={key} style={chip}>
						<p style={chipText}>{key}</p>
						<CancelIcon
							style={chipIcon}
							onClick={() => removeCredit(val)}
						></CancelIcon>
					</div>
					<div style={{ ...chip, width: "48px" }}>
						<p style={chipText}>{val}</p>
					</div>
				</div>
			);
		});
		return tempList;
	};

	let removeCredit = (val) => {
		return;
	};

	let handleEnter = (e) => {
		if (e.key === "Enter") {
			let code = document.getElementById("creditCodeInput").value;
			let credit = Number(document.getElementById("creditCreditInput").value);

			setCreditList(creditList.push({ [code]: credit }));
			console.log(creditList);

			/*
			setData((prev) => ({
				data: {
					...prev.data,
					// courses: newCourse,
				},
			}));
      */

			setShowInput(false);
			setShowAdd(true);
		}
	};

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Your transfer credits
				</h1>
				<p className="subTitle" style={subTitle}>
					Here are your transfer credits based on the screenshot you uploaded.
					Add, edit, or remove credits.
				</p>
			</div>
			<div className="body" style={body}>
				<div style={detail}>
					<p style={{ marginBottom: 0 }}>Subject Code</p>
					<p style={{ marginBottom: 0, marginLeft: "36px" }}>Credit</p>
				</div>
				<div style={detail}>
					{showInput && (
						<input
							id="creditCodeInput"
							type="text"
							style={creditInput}
							onKeyDown={(e) => handleEnter(e)}
						></input>
					)}
					{showInput && (
						<input
							id="creditCreditInput"
							type="text"
							style={creditInput}
							onKeyDown={(e) => handleEnter(e)}
						></input>
					)}
				</div>
				{renderCredits()}
				{showAdd && (
					<button
						style={addButton}
						onClick={() => {
							setShowInput(true);
							setShowAdd(false);
						}}
					>
						+
					</button>
				)}
			</div>
		</div>
	);
};

export default EditTransferCredits;
