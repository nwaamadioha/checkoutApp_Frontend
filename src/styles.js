import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    container: {
        padding: "20px  0"
    },
    formGrid: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "aliceblue",
        borderRadius: "20px",
        marginTop: "20px",
        padding: "20px"
    },
    textField: {
        textShadow: "1px 1px 2px lightblue"
    },
    button: {
        display: "flex",
        justifyContent: "center"
    }
}));

export default useStyles;