import {Link, Outlet} from "react-router-dom";
import {Fragment, useState} from "react";
import {ReactComponent as CRLogo} from "../../assets/images/crown.svg";
import './navigation.style.scss'
import {useContext} from "react";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-drop-down/cart-dropdown.component";
import {CartContext} from "../../context/cart.context";

const NavigationBar = () => {
    const  {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return <Fragment>
        <div className="navigation">
            <Link className="logo-container nav-link" to="/">
                <CRLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    <h3>SHOP</h3>
                </Link>
                {currentUser ? <h3 className="nav-link" onClick={signOutUser}>SIGN OUT</h3> : <Link className="nav-link" to="/auth">
                    <h3>SIGN IN</h3>
                </Link> }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropDown/>}
        </div>
        <Outlet/>
    </Fragment>
}

export default NavigationBar;