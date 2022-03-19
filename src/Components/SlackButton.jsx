import { useState } from 'react';
import Button from '@mui/material/Button';
import applyStyles from './styles';

function SlackButton(){
    const [imageSource,setImageSource] = useState("https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png")
    const classes = applyStyles();
    return(  
        <div className={classes.buttonDiv}>
            <Button varient="Outlined"><img src={imageSource} />Add to <b>Slack</b></Button>
        </div>
    )
}

export default SlackButton