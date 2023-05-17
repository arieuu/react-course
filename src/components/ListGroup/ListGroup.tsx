import { useState } from "react";
import "./ListGroup.css"

interface Props {
    cities: string[],
    heading: string,
    onSelectItem(item: string): void
}

function ListGroup({cities, heading, onSelectItem}: Props) {
    // const message = cities.length === 0 ? <p> No item found </p> : null

    const [selectedItem, setSelectedItem] = useState(-1)

    // Event handler

    return (
        <>
            <h1> {heading} </h1>

            {cities.length === 0 && <p> No items found </p>}

            <ul className="list-group">
                {cities.map((item, index) => <li key={item} onClick={() => {setSelectedItem(index); onSelectItem(item)}}
                className={selectedItem === index ? "list-group-item active" : "list-group-item"}> {item} </li>)}
            </ul>
        </>
    )
}

export default ListGroup;