import TitleImage from './Components/TitleImage'
import BodyText from './Components/BodyText'
import SlackButton from './Components/SlackButton'
import applyStyles from './Components/styles';

function App() {
  const classes = applyStyles()
  return (
    <div className={classes.appDiv}>
      <TitleImage />
      <BodyText />
      <SlackButton />
    </div>
  );
}

export default App;
