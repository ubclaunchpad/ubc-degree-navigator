import theme from "../../../theme";

export const container = {
	display: "flex",
	flexDirection: "column",
};
export const header = {
	marginBottom: 28,
};
export const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 6,
};
export const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 18,
	marginBottom: 0,
};
export const body = {
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 10,
	padding: "32px 36px",
	boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};
export const detail = {
	display: "flex",
	flexDirection: "row",
	gap: "16px",
};
export const creditInput = {
	paddingLeft: 10,
	height: 32,
	width: 130,
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
