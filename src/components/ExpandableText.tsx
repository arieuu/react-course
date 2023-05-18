import { useState } from "react";
import Button from "./Button";

interface Props {
    children: string
    length?: number
}

function ExpandableText({children, length=100}: Props) {
    const [expanded, setExpanded] = useState(false);

    const newText = () => {
        if(expanded) {
            return children

        } else if(!expanded) {
            const textSample = children.substring(0, length);
            return textSample + "...";
        }
    }

    return(
        <p>
            {newText()}
            {expanded && <button onClick={() => setExpanded(false)}> Less </button>}
            {!expanded && children.length > length && <button onClick={() => setExpanded(true)}> More </button>}
        </p>
    )

}

export default ExpandableText;