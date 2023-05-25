import { useEffect, useState } from "react";


function ProductList({category}: {category: string}) {

    const [products, setProducts] = useState<string[]>([]);

    const connect = () => console.log("Connecting");
    const disconnect = () => console.log("Disconnecting");

    useEffect(() => {
        // console.log("Fetching products in " + category)
        // setProducts(["one", "two"])
        connect();
        
        return(()=> disconnect())
    },[category])

    return(
        <div> ProductList</div>
    )

}

export default ProductList;