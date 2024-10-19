import './product-card.style.scss'
import Button from "../button/button.component";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product

    return <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
        <Button buttonType="inverted">Add to card</Button>
    </div>
}
export default ProductCard;