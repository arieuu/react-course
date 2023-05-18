import { useState } from "react";


function UpdateStateExercise() {

    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });

    const handleClick = () => {
        /*
            We use 2 spread operators  since it's shallow.
            That way we can get all the object proprieties and we override the key we need to change.
        */

        setGame({...game, player: {...game.player, name: "Ariel"}})
    }


    const [pizza, setPizza] = useState({
        name: "Spicy, Pepperoni",
        toppings: ["Mushroom"]
    });

    const handleClick2 = () => {
        setPizza({...pizza, toppings:[...pizza.toppings, "Cheese"]})
    }


    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: "product 1", quantity: 1},
            {id: 2, title: "product 2", quantity: 2}
        ]
    });

    const handleClick3 = () => {
        setCart({...cart, items: cart.items.map(item => item.id == 1 ? {...item, quantity: 2} : item)})
    }

}

export default UpdateStateExercise;