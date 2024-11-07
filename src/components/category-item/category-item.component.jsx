import './category-item.style.scss'
import {Link} from "react-router-dom";

const CategoryItem = ({category}) => {
    const {id, imageUrl, title} = category

    return <div key={id} className='category-container'>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <Link className='category-body-container' to={`shop/${title.toLowerCase()}`}>
            <div >
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </Link>
    </div>
}

export default CategoryItem