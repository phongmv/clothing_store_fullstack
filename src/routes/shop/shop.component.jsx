import './shop.style.scss'
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/catogory.component";
import {ProductContextProvider} from "../../context/products.context";

const Shop = () => {
    return<ProductContextProvider>
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>}/>
        </Routes>
    </ProductContextProvider>

}

export default Shop;