import './category.style.scss'
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/products.context";
import ProductCard from "../product-card/product-card";

const Category = () => {
    const {category} = useParams()

    const {products} = useContext(ProductsContext)
    const [list, setList] = useState([])

    useEffect(() => {
        setList(products[category])
    }, [list, products]);

    return <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-detail-container">
            {list && list.map((item) => (<ProductCard key={item.id} product={item}/>))}
        </div>
    </Fragment>
}

export default Category