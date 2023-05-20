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
import Form from "./components/Form";
import TableExercise from "./expense-tracker/ExpenseList";
import FormExercise from "./expense-tracker/FormExercise";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
import categories from "./expense-tracker/categories";

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

  const [selectedCategory, setSelectedCategory] = useState("")

  const [expenses, setExpenses] = useState([
    {id: 1, description: "aaa", amount: 10, category: "Utilities"},
    {id: 2, description: "bbb", amount: 10, category: "Utilities"},
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <div>
      <FormExercise onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      </div>

      {/** That filter function will re-save all expenses except for the one with that specific id. (it will clone the list. kinda) */}
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id)) }/>
    </div>
  ) 

}

export default App;
