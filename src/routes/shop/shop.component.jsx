import './shop.style.scss'
import {useContext} from "react";
import {ProductsContext} from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card";

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return <div className="products-container">
        {products.map((product, id) =>  {
            return <ProductCard key={id} product={product} />
        })}
    </div>
}

export default Shop;