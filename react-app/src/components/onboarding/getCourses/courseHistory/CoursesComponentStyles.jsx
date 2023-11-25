import theme from "../../../theme";

export const container = {
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 10,
	padding: "32px 36px",
	boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};
export const year = { display: "flex", flexDirection: "column" };
export const subHeading = {
	fontFamily: theme.fonts.headerFourMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerFourMedium,
	fontSize: 14,
	marginBottom: 16,
};
export const divider = {
	width: "100%",
	border: "1px solid #E7E7E7",
};
export const term = {
	display: "flex",
	flexDirection: "column",
	marginBottom: 40,
};
export const courses = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: "20px",
};
export const courseInput = {
	paddingLeft: 10,
	height: 32,
	width: 240,
	fontFamily: theme.fonts.buttons,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.buttons,
	borderColor: theme.colors.textDark,
	borderRadius: 5,
	backgroundColor: "#EEF5FC",
};
export const addButton = {
	color: theme.colors.primaryDark,
	fontSize: 18,
	height: 32,
	width: 46,
	borderWidth: 1,
	borderColor: theme.colors.primaryDark,
	borderRadius: 5,
	backgroundColor: theme.colors.primaryLightBackground,
};
export const chip = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	height: 32,
	width: 126,
	borderRadius: 4,
	backgroundColor: "#EEF5FC",
	//width: "fit-content",
};
export const chipText = {
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: 14,
	paddingRight: 6,
	margin: 0,
};
export const chipIcon = {
	width: 16,
	height: 16,
	color: theme.colors.primaryDark,
};
