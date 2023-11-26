import React from "react";
import theme from "../../theme";

import CheckIcon from "@mui/icons-material/Check";
import NavIllustration from "../../assets/navIllustration.svg";

function ProgressBar({
    currStepIndex
}) {
    const stepTitles = [
        "Course History",
        "Transfer Credits",
        "Degree Information",
        "Results",
    ];

    return (
        <div className="progress" style={progress}>
            <h1 style={logoText}>BlueNav</h1>

            <div className="navbarsteps" style={navbarsteps}>
                {stepTitles.map((object, i) => {
                    let mapToTitleIndex = currStepIndex < 3 ? 0 : currStepIndex < 7 ? 1 : currStepIndex - 5;

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
                                {i < mapToTitleIndex ? <CheckIcon /> : i + 1}
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
    )
}

export default ProgressBar


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