import theme from "../../theme";

// styling for each page
const page = {
    body: {
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100vw",
        height:"100vh",
    },

    progress: {
        margin: "1!",
        width: "20%",
        height: "98%",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        width: "74%",
        marginLeft: "2%",
        marginRight: "2%",
        height: "100%",
    },

    buttons: {
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: theme.fonts.buttons,
        fontWeight: theme.fontWeights.buttons,
    },

    disabledButton: {
        border: "none",
        height: "96%",
        borderRadius: "5%",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingTop: "2%",
        paddingBottom: "2%",
        backgroundColor: theme.colors.primaryDark,
        color: "#fff",
        opacity: "0.5",
        pointerEvents: "none",
    },

    prevButton: {
        border: "none",
        padding: "10",
        backgroundColor: "rgba(0,0,0,0)",
        color: "#256AF4",
        cursor: "pointer",
    },

    nextButton: {
        border: "none",
        height: "96%",
        borderRadius: "5%",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingTop: "2%",
        paddingBottom: "2%",
        backgroundColor: theme.colors.primaryDark,
        color: "#fff",
        cursor: "pointer",
    }

}

export default page;