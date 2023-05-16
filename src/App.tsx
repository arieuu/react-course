import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
  const cities = ["New york", "San Francisco", "Tokyo"]
  const handleSelectItem = (item:string) => {
    console.log(item)
  }

  const func = () => console.log("worked")

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      { alertVisible && <Alert onDismiss={() => setAlertVisibility(false)}> My alert </Alert> }
      <Button text="another" onClickButton={() => setAlertVisibility(true)} color="warning"/>

    </div>
  ) 

}

export default App;
