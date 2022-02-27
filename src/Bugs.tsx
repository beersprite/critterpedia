import logo from "./assets/images/leaf.png";
import "./assets/css/BasePage.css";
import "./assets/css/Images.css";
import { useState } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup } from "react-bootstrap";

type Bug = {
  id: number;
  "file-name": string;
  name: {
    "name-USen": string;
    "name-EUen": string;
    "name-EUde": string;
    "name-EUes": string;
    "name-USes": string;
    "name-EUfr": string;
    "name-USfr": string;
    "name-EUit": string;
    "name-EUnl": string;
    "name-CNzh": string;
    "name-TWzh": string;
    "name-JPja": string;
    "name-KRko": string;
    "name-EUru": string;
  };
  availability: {
    "month-northern": string;
    "month-southern": string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: string;
    "month-array-northern": number[];
    "month-array-southern": number[];
    "time-array": number[];
  };
  price: number;
  "price-flick": number;
  "catch-phrase": string;
  "museum-phrase": string;
  image_uri: string;
  icon_uri: string;
};

function Bugs() {
  const [bug, setBug] = useState<Bug | null>(null);
  const [userInput, setUserInput] = useState<number | undefined>(undefined);

  const loadBugs = async (id: number) => {
    const apiURL = `https://acnhapi.com/v1/bugs/${id}`;

    axios
      .get<Bug>(apiURL)
      .then((response) => {
        const allData = response.data;
        setBug(allData);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="main-div">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Work in Progress</p>
        {bug === null ? <>Loading</> : <BugDisplay bug={bug} />}
        <InputGroup className="mb-3">
          <FormControl
            type="number"
            value={userInput}
            onChange={(ev) => {
              setUserInput(Number(ev.target.value));
            }}
            placeholder="Id"
            aria-label="Id"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="info"
            disabled={userInput === undefined}
            onClick={() => {
              userInput !== undefined && loadBugs(userInput);
            }}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

function BugDisplay({ bug }: { bug: Bug }) {
  return <>{bug.name["name-USen"]}</>;
}

export default Bugs;
