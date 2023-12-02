import React, { useState, useEffect } from "react";
import theme from "../../../theme";
import CancelIcon from "@mui/icons-material/Cancel";

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

const container = {
	display: "flex",
	flexDirection: "column",
};

const header = {
	marginBottom: 28,
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 6,
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 18,
	marginBottom: 0,
};

const body = {
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 10,
	padding: "32px 36px",
	boxShadow:
		"0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};

const detail = {
	display: "flex",
	flexDirection: "row",
	gap: "16px",
};

const creditInput = {
	paddingLeft: 10,
	height: 32,
	width: 130,
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

export default EditTransferCredits;
