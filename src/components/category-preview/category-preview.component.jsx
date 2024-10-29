import './category-preview.style.scss'
import ProductCard from "../product-card/product-card";
import {Link} from "react-router-dom";

const CategoryPreview = ({title, products}) => {
    return <div className="category-preview-container">
        <h2>
            <Link className="title" to={title}>{title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
            {products.filter((_,index) => index < 4).map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </div>
    </div>
}

export default CategoryPreview