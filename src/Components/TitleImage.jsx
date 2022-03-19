import { useState } from "react";
import applyStyles from "./styles";

function TitleImage(props){
    const [imageSource,setImageSource] = useState("https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png")
    const classes = applyStyles()
    return(
        <div className={classes.titleDiv}>
            <img src={imageSource} alt="Slack Symbol"  />
        </div>
    );
}

export default TitleImage;