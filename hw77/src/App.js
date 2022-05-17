//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
      <label>Username</label>
            <input type="text" placeholder="Enter Username" required/><br/>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required/><br/>
            <button type="submit">Login</button>  
      </body>
    </div>
  );
}

export default App;
