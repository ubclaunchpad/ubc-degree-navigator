import React from "react";
import MultistepForm from "./components/onboarding/MultistepForm.jsx";
import theme from "./theme";

const App = () => {
	return (
		<div className="App" style={app}>
			<MultistepForm></MultistepForm>
		</div>
	);
};

const app = {
	backgroundColor: theme.colors.primaryBackground,
};

export default App;
