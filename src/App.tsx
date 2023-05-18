import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import { DiCodeigniter } from "react-icons/di"
import Like from "./components/Like";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";


function App() {
  const cities = ["New york", "San Francisco", "Tokyo"]

  const handleSelectItem = (item:string) => {
    console.log(item)
  }

  const func = () => console.log("worked")

  const [alertVisible, setAlertVisibility] = useState(false);

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5
  });

  const [cartItems, setCartItems] = useState(["product1", "product2"]);


  console.log(drink.title)

  return (
    <div>
      <ExpandableText length={100}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Velit, consequuntur voluptates? Distinction a iusto assumenda molestiae cumque repellat qui dolores.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat dolore non eligendi in a deserunt neque repudiandae similique aut, eius vitae culpa, doloremque ad, voluptates magni. Cupiditate, maiores similique.
      </ExpandableText>
    </div>
  ) 

}

export default App;
