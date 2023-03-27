import React, { useState } from "react";
import theme from "../../theme";
import AdditionalInformation from "./AdditionalInformation";
import CourseHistory from "./CourseHistory";
import Results from "./Results";
import Review from "./Review";
import TransferCredits from "./TransferCredits";

const MultistepForm = () => {
	const [step, setStep] = useState(0);
	const [data, setData] = useState({
		courses: [],
		transferCredits: [],
		program: "",
		major: "",
	});

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
				return <CourseHistory />;
			case 1:
				return <TransferCredits />;
			case 2:
				return <AdditionalInformation />;
			case 3:
				return <Review />;
			case 4:
				return <Results />;
			default:
				return <CourseHistory />;
		}
	};

	return (
		<div className="body" style={body}>
			<div className="container" style={container}>
				<div className="navbar" style={navbar}>
					<h1 style={logoText}>BlueNav</h1>

					<div className="navbarsteps" style={navbarsteps}>
						{StepTitles.map((object, i) => {
							return (
								/* TODO: add styles like { done ? done : todo } */
								<div className="" style={navstep} key={i}>
									<h1>{i + 1}</h1>
									<p>{object}</p>
								</div>
							);
						})}
					</div>
					<img
						src="https://via.placeholder.com/100?text=My+Logo"
						alt="Beautification illustration"
					></img>
				</div>

				<div>{StepDisplay()}</div>

				<div className="content" style={content}>
					<div className="multistep-form" style={multistepFormStyle}>
						<div className="step step-2">
							<button
								style={step == 0 || step == 4 ? invisibleButton : prevButton}
								onClick={() => {
									console.log(step);
									if (step != 0) {
										setStep((currStep) => currStep - 1);
									}
								}}
							>
								Previous Step
							</button>
							<button
								style={step == 4 ? invisibleButton : nextButton}
								onClick={() => {
									console.log(step);
									setStep((currStep) => currStep + 1);
								}}
							>
								Next Step
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const body = {
	fontFamily: "Montserrat",
	fontSize: "16px",
	lineHeight: 1.5,
};

const logoText = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.primaryDark,
	fontWeight: 700,
	fontSize: 20,
};

const container = {
	maxWidth: 1200,
	marginTop: 0,
	padding: "2rem",
	display: "flex",
};

/*Navbar styling*/
const navbar = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: theme.colors.primaryLightBackground,
	padding: "2rem",
};

const navbarsteps = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	padding: "1rem",
};

const navstep = {
	display: "flex",
	alignItems: "center",
};

const content = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end",
};

const multistepFormStyle = {
	display: "flex",
	flexDirection: "row",
	height: "100vh",
	padding: "20px",
	alignItems: "flex-end",
};

const invisibleButton = {
	display: "none",
};

const prevButton = {
	marginRight: "10px",
	border: "none",
	borderRadius: "5px",
	padding: "10px",
	backgroundColor: "#ccc",
	color: "#fff",
	cursor: "pointer",
};

const nextButton = {
	marginRight: "10px",
	border: "none",
	borderRadius: "5px",
	padding: "10px",
	backgroundColor: "#ccc",
	color: "#fff",
	cursor: "pointer",
};

const buttonHover = {
	backgroundColor: "#aaa",
};

export default MultistepForm;
