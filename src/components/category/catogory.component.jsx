import './category.style.scss'
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/products.context";
import ProductCard from "../product-card/product-card";

const Category = () => {
    const {category} = useParams()

    const {products} = useContext(ProductsContext)
    const [list, setList] = useState([])

    useEffect(() => {
        setList(products[category])
    }, [list, products]);

    return <div className="category-container">
        {list && list.map((item) => (<ProductCard key={item.id} product={item}/>))}
    </div>
}

export default Category