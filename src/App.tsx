import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import { DiCodeigniter } from "react-icons/di"
import Like from "./components/Like";


function App() {
  const cities = ["New york", "San Francisco", "Tokyo"]

  const handleSelectItem = (item:string) => {
    console.log(item)
  }

  const func = () => console.log("worked")

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      <Like color="red" onLike={() => console.log("Like!")} onDislike={() => console.log("Dislike!")}/>

    </div>
  ) 

}

export default App;
