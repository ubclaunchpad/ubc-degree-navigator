import theme from "../../../theme";
import { createTheme } from "@mui/material/styles";

export const container = {
	display: "flex",
	flexDirection: "column",
};
export const header = {
	marginBottom: 24,
};
export const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 16,
};
export const graphs = {};
export const graph = {
	display: "flex",
	flexDirection: "row",
	marginBottom: 28,
};
export const pieChart = {
	marginRight: "32px",
};
export const graphText = {
	fontFamily: theme.fonts.headerOne,
	fontWeight: 800,
	fontSize: 28,
	marginBottom: 0,
};
export const description = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
};
export const descTitle = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 24,
	marginBottom: 20,
};
export const descBody = {
	fontFamily: theme.fonts.headerTwo,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerTwo,
	fontSize: 20,
	marginBottom: 0,
};
export const recommCourses = {
	display: "flex",
	flexDirection: "column",
};
export const recommTitle = {
	marginTop: "22px",
	marginBottom: "22px",
	fontFamily: theme.fonts.headerFour,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerFour,
	fontSize: 16,
};
export const recomm = {
	display: "flex",
	flexDirection: "row",
	gap: "20px",
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: 14,
};
export const chip = {
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 4,
	padding: "8px 20px",
};
export const chartTheme = createTheme({
	palette: {
		complete: {
			main: "#8A8D56",
		},
		incomplete: {
			main: "#F2B5AA",
		},
		incompleteDarker: {
			main: "#E66D57",
		},
	},
});
