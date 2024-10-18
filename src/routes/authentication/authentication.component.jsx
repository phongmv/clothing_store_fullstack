import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.style.scss'

const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup()
        // Create user into database with auth
       const userDocRef  =  await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }

    return <div className="authentication-container">
        <SignInForm/>
        <SignUpForm/>
    </div>
}

export default Authentication