import {Fragment, useContext} from "react";
import {ProductsContext} from "../../context/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";



const CategoriesPreview = () => {
    const {products} = useContext(ProductsContext)

    return <Fragment>
        {Object.keys(products).map((title, index) => <CategoryPreview key={index} title={title} products={products[title]}/>)}
    </Fragment>
}

export default CategoriesPreview;