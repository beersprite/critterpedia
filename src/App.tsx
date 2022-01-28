import logo from "./assets/images/leaf.png";
import "./assets/css/BasePage.css";
import "./assets/css/Images.css";

function App() {
  return (
    <div>    
      <div className="main-div">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Work in Progress
          </p>
          <a href="https://reactjs.org">
            Learn React
          </a>
      </div>
    </div>
  );
}

export default App;
