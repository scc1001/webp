//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
      <h1>CGU login</h1>
    </div>
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
