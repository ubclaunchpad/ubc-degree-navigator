import theme from "../../../theme";

export const container = {
	display: "flex",
	flexDirection: "column",
};
export const header = {
	marginBottom: 50,
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
export const icon = {
	width: 72,
	height: 72,
	backgroundColor: theme.colors.primaryDark,
	justifyContent: "center",
	padding: 18,
	borderRadius: 20,
};
export const topper = {
	display: "flex",
	flexDirection: "row",
};
export const check = {
	width: 20,
	height: 20,
	marginTop: 2,
	marginLeft: 8,
	padding: 2,
	backgroundColor: theme.colors.primaryDark,
	color: theme.colors.textLight,
	borderRadius: 10,
};
export const description = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	marginLeft: 24,
};
export const subSub = {
	fontFamily: theme.fonts.headerFour,
	color: theme.colors.textGrey,
	fontWeight: theme.fonts.headerFour,
	fontSize: 16,
	marginBottom: 0,
};
