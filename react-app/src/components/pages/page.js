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
        overflow: "hidden",
    },

    progress: {
        width: "20%",
        height: "100vh",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "100vh",
    },

    buttons: {
        height: "8vh",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "2vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontFamily: theme.fonts.buttons,
        fontWeight: theme.fontWeights.buttons,
        fontSize: "2.3vh",
    },

    disabledButton: {
        border: "none",
        height: "7.5vh",
        borderRadius: "5%",
        textAlign: "center",
        padding: "2vh",
        backgroundColor: theme.colors.primaryDark,
        color: "#fff",
        opacity: "0.5",
        pointerEvents: "none",
    },

    prevButton: {
        border: "none",
        height: "7.5vh",
        textAlign: "center",
        padding: "2vh",
        backgroundColor: "rgba(0,0,0,0)",
        color: "#256AF4",
        cursor: "pointer",
        marginRight: "auto",
    },

    nextButton: {
        border: "none",
        height: "7.5vh",
        borderRadius: "5%",
        padding: "2vh",
        backgroundColor: theme.colors.primaryDark,
        color: "#fff",
        cursor: "pointer",
    }

}

export default page;