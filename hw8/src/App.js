//import logo from './logo.svg';
import './App.css';
import MultiButton from './Button';
import ttext2 from './ttext';
import ttext3 from './tttext';

function App() {
  return (
    <div className="App">
      <div>
        {ttext2()}
      </div>
      <div>
        {ttext3()}
      </div>
      <div>
        {MultiButton(1)}
      </div>
    </div>
  );
}

export default App;
