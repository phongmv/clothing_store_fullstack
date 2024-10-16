import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup()
        // Create user into database with auth
       const userDocRef  =  await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }

    return <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign in with google pop-up</button>
        <SignUpForm/>
    </div>
}

export default SignIn