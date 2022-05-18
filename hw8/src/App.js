//import logo from './logo.svg';
import './App.css';
import MultiButton from './Button';


function App() {
  return (
    <div className="App">
      <body>
      <label>Email</label>
            <input type="text" placeholder="Enter Email" required/><br/>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required/><br/> 
      </body>
      <div>
        {MultiButton(1)}
      </div>
    </div>
  );
}

export default App;
