import React from "react";
import MultistepForm from "./components/onboarding/MultistepForm.jsx";
import LoginPage from "./components/loginpage/LoginPage.jsx";
import theme from "./theme";

let loginFlag = true;

const App = () => {
	return (
		<div className="App" style={app}>
			{loginFlag ? <LoginPage></LoginPage> : <MultistepForm></MultistepForm>}
		</div>
	);
};

const app = {
	backgroundColor: theme.colors.primaryBackground,
};

export default App;
