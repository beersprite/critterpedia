import logo from "./assets/images/leaf.png";
import "./assets/css/BasePage.css";
import "./assets/css/Images.css";
import { useState } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup } from "react-bootstrap";

type Fish = {
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
  shadow: string;
  price: number;
  "price-cj": number;
  "catch-phrase": string;
  "museum-phrase": string;
  image_uri: string;
  icon_uri: string;
};

function App() {
  const [fish, setFish] = useState<Fish | null>(null);
  // const [fishArray, setFishArray] = useState<Fish[]>([]);
  const [userInput, setUserInput] = useState<number | undefined>(undefined);

  const loadFish = async (id: number) => {
    const apiURL = `https://acnhapi.com/v1/fish/${id}`;

    await axios
      .get<Fish>(apiURL)
      .then((response) => {
        const allData = response.data;
        setFish(allData);
        return fish;
      })
      .catch((error) => console.error(error));
  };

  /*   function MakeFishArray() {
    const fishDisplayArray = [];

    for (let id = 1; id < 84; id++) {
      loadFish(id);
      if (fish) {
        fishDisplayArray.push(<FishDisplay fish={fish} />);
      }
    }
    console.log(fishDisplayArray);
    return fishDisplayArray;
  }

  function FishGridDisplay() {
    const fishDisplayArray = MakeFishArray();
    return (
      <>
        {fishDisplayArray.map((fish) => {
          <div className="critter-box flex flex-column flex-justify-content">
            {fish}
          </div>;
        })}
      </>
    );
  } */

  return (
    <div className="main-div">
      <div className="div-spiral">
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
        <div className="book-spiral" />
      </div>
      <div className="book-div">
        <div className="book-content">
          <div className="flex title">
            <img
              src={logo}
              className="App-logo"
              alt="Animal Crossing Leaf image"
              title="Animal Crossing Leaf image"
            />
            <h1>Critterpedia</h1>
          </div>
          <InputGroup className="mb-3">
            <FormControl
              type="number"
              value={userInput}
              size="sm"
              onChange={(ev) => {
                setUserInput(Number(ev.target.value));
              }}
              placeholder="Id"
              aria-label="Fish Id"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="info"
              disabled={userInput === undefined}
              onClick={() => {
                userInput !== undefined && loadFish(userInput);
              }}
            >
              Search
            </Button>
          </InputGroup>
          <div className="flex">
            <div className="critter-box flex flex-column flex-justify-content">
              {fish === null ? (
                <h5>Select a critter</h5>
              ) : (
                <FishDisplay fish={fish} />
              )}
            </div>
            <div className="info-box">
              {fish === null ? <h4></h4> : <FishDescription fish={fish} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FishDisplay({ fish }: { fish: Fish }) {
  const fishName = fish.availability["month-southern"];
  const fishLocation = fish.availability["location"];
  return (
    <div>
      <img
        src={fish.icon_uri}
        alt={fish.name["name-USen"] + " image"}
        title={fish.name["name-USen"] + " image"}
      />

      <h3>{fish.name["name-USen"]}</h3>
      <h5>{fishName === "" ? "All Day" : fishName + " h"}</h5>
      <h5>{fishLocation}</h5>
    </div>
  );
}

function FishDescription({ fish }: { fish: Fish }) {
  const fishDescription = fish["museum-phrase"];
  return (
    <div>
      <p>"{fishDescription}" </p>
      <p>- Blathers, the nerd</p>
    </div>
  );
}

export default App;
