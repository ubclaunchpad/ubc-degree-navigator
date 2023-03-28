import React, { useState } from "react";
import theme from "../../theme";
import AdditionalInformation from "./AdditionalInformation";
import CourseHistory from "./CourseHistory";
import Results from "./Results";
import Review from "./Review";
import TransferCredits from "./TransferCredits";
import CheckIcon from "@mui/icons-material/Check";
import NavIllustration from "../../assets/navIllustration.svg";
import EditHistory from "./courseHistory/EditHistory";

const MultistepForm = () => {
	const [step, setStep] = useState(0);
	// const [button, setButton] = useState(false);
	const [data, setData] = useState({
		courses: [],
		transferCredits: [],
		program: "",
		major: "",
	});
	const [showButton, setShowButton] = useState(false);

	const StepTitles = [
		"Course history",
		"Transfer credits",
		"Degree information",
		"Review",
		"Results!",
	];

	const StepDisplay = () => {
		switch (step) {
			case 0:
				return (
					<CourseHistory
						data={data}
						setData={setData}
						setStep={setStep}
						setShowButton={setShowButton}
					/>
				);
			case 0.5:
				return <EditHistory />;
			case 1:
				return (
					<TransferCredits
						data={data}
						setData={setData}
						step={step}
						setStep={setStep}
					/>
				);
			case 2:
				return <AdditionalInformation data={data} setData={setData} />;
			case 3:
				return <Review data={data} setData={setData} />;
			case 4:
				return <Results data={data} setData={setData} />;
			default:
				return <CourseHistory data={data} setData={setData} />;
		}
	};

	return (
		<div className="body" style={body}>
			<div className="progress" style={progress}>
				<h1 style={logoText}>BlueNav</h1>

				<div className="navbarsteps" style={navbarsteps}>
					{StepTitles.map((object, i) => {
						return (
							<div
								className="navstep"
								style={{
									...navstep,
									...(i === step ? selected : todo),
								}}
								key={i}
							>
								<p
									className="navnum"
									style={{ ...navnum, ...(i < step ? finishedCheckbox : "") }}
								>
									{i < step ? <CheckIcon /> : i + 1}
								</p>
								<p
									className="navname"
									style={{ ...navname, ...(i < step ? finishedName : "") }}
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
				<div className="content-step">{StepDisplay()}</div>
				{showButton ? (
					<div className="buttons" style={buttons}>
						<button
							style={step === 0 || step === 4 ? invisibleButton : prevButton}
							onClick={() => {
								console.log(step);
								if (step !== 0) {
									setStep((currStep) => currStep - 0.5);
								}
							}}
						>
							Previous Step
						</button>
						<button
							style={step === 4 ? invisibleButton : nextButton}
							onClick={() => {
								console.log(step);
								setStep((currStep) => currStep + 0.5);
							}}
						>
							Next Step →
						</button>
					</div>
				) : (
					<div></div>
				)}
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
