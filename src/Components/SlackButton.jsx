import './SlackButton.css'
import Button from '@mui/material/Button';

function SlackButton(){
    return(
        <div className='button-body'>
            <Button varient="Outlined" color='inherit' size='large' style={{ border: '2px solid grey' }}><img src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' className='button-icon' />Add to <b className='button-bold'>Slack</b></Button>
        </div>
    )
}

export default SlackButton