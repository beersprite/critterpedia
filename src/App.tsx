import logo from "./assets/images/leaf.png";
import "./assets/css/BasePage.css";
import "./assets/css/Images.css";
import axios from "axios";

async function fetchData() {
  const url: string = 'https://acnhapi.com/v1/';
  try {
      const response = await axios.get(url)
      console.log(response);
      return response;
  } catch (exception) {
      process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
  }

}

function App() {

  const data = fetchData();

  return (
    <div>    
      <div className="main-div">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Work in Progress
          </p>
          <p>
            
          </p>
      </div>
    </div>
  );
}

export default App;
