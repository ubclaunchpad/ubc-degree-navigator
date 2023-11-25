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
export const flex = {
	display: "flex",
	flexDirection: "column",
	marginRight: 48,
};
export const flexbox = {
	display: "flex",
};
export const dropdownFont = { fontSize: "18px", fontFamily: "Inter" };
export const dropdownBox = {
	width: 376,
	backgroundColor: "white",
	fontSize: "18px",
	fontFamily: "Inter",
	color: "black",
	boxShadow: "none",
	".MuiOutlinedInput-notchedOutline": { border: 0 },
	"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
		border: 0,
	},
	"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
		border: 0,
	},
	marginBottom: "32px",
};
