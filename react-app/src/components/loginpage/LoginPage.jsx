import React, { useState } from "react";
import theme from "../../theme";

const LoginPage = () => {
    return (
        <div className="body" style={body}>
            <div className="intro" style={intro}>
                <h1 style={logoText}>BlueNav</h1>

                <div className="introBody" style={introBody}>
                    <h1>The <i><b>simple</b></i> degree navigator.</h1>
                    <p>
                        No matter where you are in your undergraduate studies, we got you! With a few
                        easy clicks, check for the credits needed to advance your undergraduate journey!
                    </p>
                </div>

            </div>
            <div className="content" style={content}>
                <div className="loginText">
                    <h3>Sign Up</h3>
                    <p>Welcome to BlueNav! Get started with your Gmail.</p>
                </div>
                    
                <div className="container" style={container}>
                    <h1>insert google auth here</h1>
                </div>
            </div>
        </div>
    );
}

const body = {
	fontFamily: "Montserrat",
	margin: 16,
	display: "flex",
	flexDirection: "row",
};

const intro = {
	width: "26.455%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	boxShadow: "none",
	borderRadius: 10,
    backgroundColor: theme.colors.primaryDarkest
};

const introBody = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	margin: 48,
	width: "73.545%",
    color: theme.colors.textLight
};

const logoText = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.primaryLightBackground,
	fontWeight: 700,
	fontSize: 20,
	margin: 48,
};

const content = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	margin: 92,
	width: "73.545%",
};

const container = {
    border: "1px solid #ccc",
    padding: 20,
    margin: 20,
    backgroundColor: theme.colors.primaryLightBackground,
}

export default LoginPage;