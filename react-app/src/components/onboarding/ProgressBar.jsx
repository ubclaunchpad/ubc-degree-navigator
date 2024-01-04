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

    let mapToTitleIndex = currStepIndex < 3 ? 0 : currStepIndex < 7 ? 1 : currStepIndex - 5;

    return (
        <div className="bar" style={bar}>
            <div className="navbarsteps" style={navbarsteps}>
                <h1 style={logoText}>BlueNav</h1>

                {stepTitles.map((object, i) => {
                    return (
                        <div
                            className="navstep"
                            style={{
                                ...navstep,
                                ...(i === mapToTitleIndex ? selected : todo),
                            }}
                            key={i}
                        >
                            <div className="navnum" style={{
                                ...navnum,
                                ...(i < mapToTitleIndex ? finishedCheckbox : "")
                            }}>
                                <div>{i < mapToTitleIndex ? <CheckIcon /> : i + 1}</div>
                            </div>

                            <div className="navname" style={{
                                ...navname,
                                ...(i < mapToTitleIndex ? finishedName : "")
                            }}>
                                {object}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={imgDiv}>
                <img
                    src={NavIllustration}
                    alt="navBar illustration"
                    style={Illustration}
                />
            </div>


        </div>
    )
}

export default ProgressBar


const bar = {
    width: "100%",
    height: "100vh",
    boxShadow: "none",
    backgroundColor: theme.colors.primaryLightBackground,
};

const logoText = {
    fontFamily: theme.fonts.headerOne,
    color: theme.colors.primaryDark,
    textAlign: "center",
    fontSize: "4vh",
    marginTop: "5vh",
    marginBottom: "5vh",
};

const navbarsteps = {
    display: "flex",
    flexDirection: "column",
    flexShrink: "1",
    boxSizing: "box-model",
    width: "100%",
    height: "70vh",
    paddingLeft: "10%",
    paddingRight: "10%",
    fontFamily: theme.fonts.headerThreeMedium,
    weight: theme.fonts.headerThreeMedium,
};

const navstep = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "2%",
    width: "96%",
    fontSize: "2.2vh",
};

const navnum = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: "1vh",
    width: "6vh",
    height: "0%",
    paddingTop: "3vh",
    paddingBottom: "3vh",
};

const finishedCheckbox = {
    backgroundColor: theme.colors.primaryMedium,
    color: theme.colors.textLight,
};

const navname = {
    paddingLeft: "5%",
    width: "75%",
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

const imgDiv = {
    width: "100%",
    height: "30vh",
}
const Illustration = {
    width: "100%",
    height: "100%",
};