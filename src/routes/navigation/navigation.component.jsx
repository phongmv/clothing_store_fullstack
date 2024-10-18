import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CRLogo} from "../../assets/images/crown.svg";
import './navigation.style.scss'
import {useContext} from "react";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.util";

const NavigationBar = () => {
    const  {currentUser, setCurrentUser} = useContext(UserContext)

    const handleSignOutUser =  async () => {
       await signOutUser()
       setCurrentUser(null)
    }
    return <Fragment>
        <div className="navigation">
            <Link className="logo-container nav-link" to="/">
                <CRLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    <h3>SHOP</h3>
                </Link>
                {currentUser ? <h3 className="nav-link" onClick={handleSignOutUser}>SIGN OUT</h3> : <Link className="nav-link" to="/auth">
                    <h3>SIGN IN</h3>
                </Link> }
            </div>
        </div>
        <Outlet/>
    </Fragment>
}

export default NavigationBar;