import './shop.style.scss'
import {Fragment, useContext} from "react";
import {ProductsContext} from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card";

const Shop = () => {
    const {products} = useContext(ProductsContext)

    return <Fragment>
        {Object.keys(products).map((title, index) => {
            return <Fragment key={index}>
                <h2>{title.toUpperCase()}</h2>
                <div className="products-container">
                    {products[title].map((product, index) => {
                        return <ProductCard key={index} product={product}/>
                    })}
                </div>
            </Fragment>
        })}
    </Fragment>
}

export default Shop;