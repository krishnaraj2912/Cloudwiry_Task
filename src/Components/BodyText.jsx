import applyStyles from "./styles";

function bodyText(){
    const classes = applyStyles()
    return(
        <div className={classes.bodyDiv}>
            <b>Welcome to the page</b>
            <br />
            <p>Hi, I am Krishna Raj. I am currently pursuing 3rd year of MSc Theoretical Computer Science at PSG College of Technology.</p>
            <p className={classes.bodyPara}>This page was created using React library.</p>
        </div>
    );
}

export default bodyText;