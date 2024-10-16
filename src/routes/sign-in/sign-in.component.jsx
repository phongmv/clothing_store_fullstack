import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.util";

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
    </div>
}

export default SignIn