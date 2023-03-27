import React, { useState } from "react";
import NewComponent from "./components/NewComponent";
import MultistepForm from "./components/onboarding/MultistepForm.jsx";
import theme from "./theme";

const App = () => {
	return (
		<div className="App" style={app}>
			<NewComponent
				text={"This text comes from another component called newComponent.js"}
			/>
			<MultistepForm></MultistepForm>
		</div>
	);
};

const app = {
	backgroundColor: theme.colors.primaryBackground,
};

export default App;
