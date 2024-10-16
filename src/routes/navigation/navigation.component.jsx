import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CRLogo} from "../../assets/images/crown.svg";
import './navigation.style.scss'
const NavigationBar = () => {
    return <Fragment>
        <div className="navigation">
            <Link className="logo-container nav-link" to="/">
                <CRLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="shop">
                    <h3>Shop</h3>
                </Link>
                <Link className="nav-link" to="sign-in">
                    <h3>Sign In</h3>
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
}

export default NavigationBar;