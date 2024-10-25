import './shop.style.scss'
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/catogory.component";

const Shop = () => {
    return <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route path=":category" element={<Category/>}/>
    </Routes>
}

export default Shop;