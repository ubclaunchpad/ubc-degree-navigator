import theme from "../../../theme";

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
export const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 18,
};
export const components = {
	display: "flex",
	flexDirection: "column",
	gap: "24px",
	marginBottom: "36px",
};
export const buttonWrapper = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	marginBottom: "24px",
};
export const button = {
	padding: "8px 24px",
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: 14,
	borderWidth: 0,
	borderRadius: 4,
	backgroundColor: theme.colors.primaryLightBackground,
	boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -2px rgba(16, 24, 40, 0.1)",
};
