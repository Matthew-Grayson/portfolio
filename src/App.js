import logo from './logo.svg';
import './App.css';
import MediaControlCard from './Components/Card'
import {TSUMAMI} from './Constants';

function App() {
  return (
    <div className="App">
        <MediaControlCard title={TSUMAMI.title} description={TSUMAMI.description} image={TSUMAMI.image} project={TSUMAMI.project} site={TSUMAMI.site}/>
    </div>
  );
}

export default App;
