import {useContext} from "react";
import {ProductsContext} from "../../context/products.context";

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return <div>
        {products.map((item, id) =>  {
            return <div key={id}>
                <div>{item.name}</div>
            </div>
        })}
    </div>
}

export default Shop;