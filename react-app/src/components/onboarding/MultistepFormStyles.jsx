import theme from "../../theme";

export const body = {
	fontFamily: "Montserrat",
	margin: 16,
	display: "flex",
	flexDirection: "row",
};
export const progress = {
	width: "26.455%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	boxShadow: "none",
	borderRadius: 10,
	backgroundColor: theme.colors.primaryLightBackground,
};
export const logoText = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.primaryDark,
	fontWeight: 700,
	fontSize: 20,
	margin: 48,
};
export const navbarsteps = {
	display: "flex",
	flexDirection: "column",
	marginLeft: 36,
	marginBottom: 36,
	fontFamily: theme.fonts.headerThreeMedium,
	weight: theme.fonts.headerThreeMedium,
};
export const navstep = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	marginTop: 0,
	marginBottom: 36,
};
export const navnum = {
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
export const finishedCheckbox = {
	backgroundColor: theme.colors.primaryMedium,
	color: theme.colors.textLight,
};
export const navname = {
	font: theme.fonts.headerThreeMedium,
	weight: theme.fonts.headerThreeMedium,
};
export const finishedName = {
	color: "#ABBED1",
};
export const selected = {
	color: theme.colors.primary,
};
export const todo = {
	color: theme.colors.textGrey,
};
export const Illustration = {
	width: 367,
	height: 334.32,
};
export const content = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	margin: 92,
	width: "73.545%",
};
export const invisibleButton = {
	opacity: 0,
	pointerEvents: "none",
};
export const buttons = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	fontFamily: theme.fonts.buttons,
	fontWeight: theme.fontWeights.buttons,
};
export const prevButton = {
	border: "none",
	padding: "10",
	backgroundColor: "rgba(0,0,0,0)",
	color: "#256AF4",
	cursor: "pointer",
};
export const disabledButton = {
	border: "none",
	borderRadius: "5px",
	paddingLeft: "25.5px",
	paddingRight: "25.5px",
	paddingTop: "12px",
	paddingBottom: "12px",
	backgroundColor: theme.colors.primaryDark,
	color: "#fff",
	opacity: "0.5",
	pointerEvents: "none",
};
export const nextButton = {
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
