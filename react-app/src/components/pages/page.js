import theme from "../../theme";

// styling for each page
const page = {
    body: {
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height:"100vh",
    },

    progress: {
        margin: "1%",
        width: "20%",
        height: "98%",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "78%",
        height: "90%",
    },

    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: theme.fonts.buttons,
        fontWeight: theme.fontWeights.buttons,
    },

    disabledButton: {
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
        borderRadius: "5px",
        paddingLeft: "25.5px",
        paddingRight: "25.5px",
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: theme.colors.primaryDark,
        color: "#fff",
        cursor: "pointer",
    }

}

export default page;