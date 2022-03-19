import { makeStyles } from "@mui/styles";

const applyStyles = makeStyles({
    appDiv:{
        display: 'flex',
    },
    titleDiv: {
        height: '11%',
        width: '11%',
        margin: '60px 20px 0 10px',
        '& img':{
            width: '100%',
        },
    },
    bodyDiv: {
        margin: '50px 100px 0 100px',
        fontFamily: "'Fredoka','sans-serif'",
        fontSize: 'large',
    },
    bodyPara: {
        fontFamily: "'Roboto','sans-serif'",
    },
    buttonDiv: {
        margin: '60px 20px',
        width: '10%',
        height: '13%',
        color: 'black',
        '& Button':{
            color: 'inherit',
            border: '1px solid grey',
            borderRadius: '10px',
            fontFamily: "'Lato','sans-serif'",
            fontSize: 'medium',
            textTransform: 'none',
            '&:hover':{
                backgroundColor: "black",
                color:"white",
            },
            '& img':{
                width: '15%',
                paddingRight: '9px',
            },
            '& b':{
                paddingLeft: '4px',
            }
        }
    }
})

export default applyStyles