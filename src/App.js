import './App.css';
import TitleImage from './Components/TitleImage'
import BodyText from './Components/BodyText'
import SlackButton from './Components/SlackButton'

function App() {
  return (
    <div className='flex'>
      <TitleImage />
      <BodyText />
      <SlackButton />
    </div>
  );
}

export default App;
