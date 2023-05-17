import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"

interface Props {
    color?: string,
    onLike(): void
    onDislike(): void
}

function Like({color="red", onLike, onDislike}:Props) {
    const [clicked, setClicked] = useState(false)

    return(
        <>
            {clicked == false && <AiOutlineHeart size={40} onClick={() => {setClicked(true); onLike()}}/> }
            {clicked == true && <AiFillHeart size={40} onClick={() => {setClicked(false); onDislike()}} color={color}/> }
        </>
    )


}

export default Like;