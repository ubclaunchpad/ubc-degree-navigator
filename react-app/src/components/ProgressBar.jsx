import React from "react";
import theme from "../theme";
import "./ProgressBar.css";

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

            <div style={nonImgDiv}>
                <h1 style={logoText}>BlueNav</h1>

                <div className="navbarsteps" style={navbarsteps}>
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "none",
    borderRadius: "2%",
    backgroundColor: theme.colors.primaryLightBackground,
};

const nonImgDiv = {
    width: "100%",
    height: "50%",
}

const logoText = {
    fontFamily: theme.fonts.headerOne,
    color: theme.colors.primaryDark,
    textAlign: "center",
    margin: "18%",
};

const navbarsteps = {
    display: "flex",
    flexDirection: "column",
    boxSizing: "box-model",
    width: "100%",
    height: "64%",
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
};

const navnum = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: "5%",
    width: "20%",
    height: "0%",
    paddingTop: "10%",
    paddingBottom: "10%",
};

const finishedCheckbox = {
    backgroundColor: theme.colors.primaryMedium,
    color: theme.colors.textLight,
};

const navname = {
    paddingLeft: "5%",
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
    height: "30%",
}
const Illustration = {
    width: "100%",
    height: "130%",
    alignSelf: "end",
};