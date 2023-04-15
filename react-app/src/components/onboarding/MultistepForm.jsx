import React, { useState } from "react";
import theme from "../../theme";
import ChooseMethod from "./courseHistory/ChooseMethod";
import UploadTranscript from "./courseHistory/UploadTranscript";
import EditHistory from "./courseHistory/EditHistory";
import TransferCredits from "./transferCredits/TransferCredits";
import ChooseRoute from "./transferCredits/ChooseRoute";
import UploadTransferCredit from "./transferCredits/UploadTransferCredit";
import EditTransferCredits from "./transferCredits/EditTransferCredits";
import AdditionalInformation from "./AdditionalInformation";
import Results from "./Results";
import Review from "./Review";
import CheckIcon from "@mui/icons-material/Check";
import NavIllustration from "../../assets/navIllustration.svg";

const MultistepForm = () => {
	const [step, setStep] = useState("course history"); // TODO: edit this back to "course history"
	const [data, setData] = useState({
		courses: [
			["CPSC 110", "CPSC 121", "PHYS 101", "MATH 100"],
			["MATH 100", "ENGL 110", "CPSC 210", "ASTR 101"],
			["CPSC 221", "MATH 200", "STAT 200", "WRDS 150"],
			["CPSC 213", "DSCI 100", "MATH 221", "MATH 302"],
		],
		transferCredits: [{ "BIOL 1**": 3 }, { "CHIN 241": 3 }],
		program: "Bachelor of Computer Science",
		major: "Computer Science",
	});
	const [enableButton, setEnableButton] = useState(false);
	const [transcriptMethod, setTranscriptMethod] = useState("");
	const [hasTransferCredit, setHasTransferCredit] = useState("");
	const [transferCreditRoute, setTransferCreditRoute] = useState("");

	const steps = [
		"course history", // 0
		"upload transcript", // 1
		"edit course history", // 2
		"transfer credits", // 3
		"choose route", // 4
		"upload transfer credit", // 5
		"edit transfer credit", // 6
		"additional information", // 7
		// "review", // 8
		"results", // 9
	];

	const stepTitles = [
		"Course history",
		"Transfer credits",
		"Degree information",
		// "Review",
		"Results!",
	];

	const DisplayStep = () => {
		switch (step) {
			case "course history":
				return (
					<ChooseMethod
						transcriptMethod={transcriptMethod}
						setTranscriptMethod={setTranscriptMethod}
						setEnableButton={setEnableButton}
					/>
				);
			case "upload transcript":
				return (
					<UploadTranscript
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}
					/>
				);
			case "edit course history":
				return (
					<EditHistory
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}
					/>
				);
			case "transfer credits":
				return (
					<TransferCredits
						hasTransferCredit={hasTransferCredit}
						setHasTransferCredit={setHasTransferCredit}
						setEnableButton={setEnableButton}
					/>
				);
			case "choose route":
				return (
					<ChooseRoute
						transferCreditRoute={transferCreditRoute}
						setTransferCreditRoute={setTransferCreditRoute}
						setEnableButton={setEnableButton}
					/>
				);
			case "upload transfer credit":
				return (
					<UploadTransferCredit
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}
					/>
				);
			case "edit transfer credit":
				return (
					<EditTransferCredits
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}
					/>
				);
			case "additional information":
				return (
					<AdditionalInformation
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}
					/>
				);
			case "review":
				return (
					<Review
						data={data}
						setData={setData}
						setEnableButton={setEnableButton}
					/>
				);
			case "results":
				return <Results data={data} setData={setData} />;
			default:
				return;
		}
	};

	const goBack = () => {
		if (step === "edit course history" && transcriptMethod === "manual") {
			setStep("course history");
		} else if (
			step === "additional information" &&
			hasTransferCredit === "no"
		) {
			setStep("transfer credits");
		} else if (
			step === "edit transfer credit" &&
			transferCreditRoute === "manual"
		) {
			setStep("choose route");
		} else {
			let index = steps.indexOf(step);
			if (index !== 0) {
				setStep(steps[index - 1]);
			}
		}
	};

	const goForward = () => {
		if (step === "course history" && transcriptMethod === "manual") {
			setStep("edit course history");
		} else if (step === "transfer credits" && hasTransferCredit === "no") {
			setStep("additional information");
		} else if (step === "choose route" && transferCreditRoute === "manual") {
			setStep("edit transfer credit");
		} else {
			let index = steps.indexOf(step);
			if (index !== steps.length) {
				setStep(steps[index + 1]);
			}
		}
		setEnableButton(false);
		// console.log(steps[steps.indexOf(step) + 1]);
	};

	return (
		<div className="body" style={body}>
			<div className="progress" style={progress}>
				<h1 style={logoText}>BlueNav</h1>

				<div className="navbarsteps" style={navbarsteps}>
					{stepTitles.map((object, i) => {
						let currIndex = steps.indexOf(step);
						let mapToTitleIndex =
							currIndex < 3 ? 0 : currIndex < 7 ? 1 : currIndex - 5;
						return (
							<div
								className="navstep"
								style={{
									...navstep,
									...(i === mapToTitleIndex ? selected : todo),
								}}
								key={i}
							>
								<p
									className="navnum"
									style={{
										...navnum,
										...(i < mapToTitleIndex ? finishedCheckbox : ""),
									}}
								>
									{i < step ? <CheckIcon /> : i + 1}
								</p>
								<p
									className="navname"
									style={{
										...navname,
										...(i < mapToTitleIndex ? finishedName : ""),
									}}
								>
									{object}
								</p>
							</div>
						);
					})}
				</div>

				<img
					src={NavIllustration}
					alt="navBar illustration"
					style={Illustration}
				/>
			</div>
			<div className="content" style={content}>
				<div className="content-step">{DisplayStep()}</div>
				<div className="buttons" style={buttons}>
					<button
						style={
							step === "course history" ||
							steps.indexOf(step) === steps.length - 1
								? invisibleButton
								: prevButton
						}
						onClick={() => {
							goBack();
						}}
					>
						Previous Step
					</button>
					<button
						style={
							steps.indexOf(step) === steps.length - 1
								? invisibleButton
								: enableButton
								? nextButton
								: disabledButton
						}
						onClick={() => {
							goForward();
						}}
					>
						Next Step →
					</button>
				</div>
			</div>
		</div>
	);
};

const body = {
	fontFamily: "Montserrat",
	margin: 16,
	display: "flex",
	flexDirection: "row",
};

const progress = {
	width: "26.455%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	boxShadow: "none",
	borderRadius: 10,
	backgroundColor: theme.colors.primaryLightBackground,
};

const logoText = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.primaryDark,
	fontWeight: 700,
	fontSize: 20,
	margin: 48,
};

const navbarsteps = {
	display: "flex",
	flexDirection: "column",
	marginLeft: 36,
	marginBottom: 36,
	fontFamily: theme.fonts.headerThreeMedium,
	weight: theme.fonts.headerThreeMedium,
};

const navstep = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	marginTop: 0,
	marginBottom: 36,
};

const navnum = {
	width: 35,
	height: 35,
	marginRight: 25,
	paddingTop: 6,
	borderStyle: "solid",
	borderWidth: 1,
	borderRadius: 6,
	textAlign: "center",
	fontSize: 16,
};

const finishedCheckbox = {
	backgroundColor: theme.colors.primaryMedium,
	color: theme.colors.textLight,
};

const navname = {
	font: theme.fonts.headerThreeMedium,
	weight: theme.fonts.headerThreeMedium,
};

const finishedName = {
	color: "#ABBED1",
};

const selected = {
	color: theme.colors.primary,
};

const todo = {
	color: theme.colors.textGrey,
};

const Illustration = {
	width: 367,
	height: 334.32,
};

const content = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	margin: 92,
	width: "73.545%",
};

const invisibleButton = {
	opacity: 0,
	pointerEvents: "none",
};

const buttons = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	fontFamily: theme.fonts.buttons,
	fontWeight: theme.fontWeights.buttons,
};

const prevButton = {
	border: "none",
	padding: "10",
	backgroundColor: "rgba(0,0,0,0)",
	color: "#256AF4",
	cursor: "pointer",
};

const disabledButton = {
	border: "none",
	borderRadius: "5px",
	paddingLeft: "25.5px",
	paddingRight: "25.5px",
	paddingTop: "12px",
	paddingBottom: "12px",
	backgroundColor: theme.colors.primaryDark,
	color: "#fff",
	opacity: "0.5",
	pointerEvents: "none",
};

const nextButton = {
	border: "none",
	borderRadius: "5px",
	paddingLeft: "25.5px",
	paddingRight: "25.5px",
	paddingTop: "12px",
	paddingBottom: "12px",
	backgroundColor: theme.colors.primaryDark,
	color: "#fff",
	cursor: "pointer",
};

export default MultistepForm;
