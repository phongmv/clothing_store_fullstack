import './sign-in-form.style.scss'
import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.util";


const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password} = formField
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormField({...formField, [name]: value})
    }

    const resetFormField = () => {
        setFormField({...defaultFormField})
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const {user}  = await signInUserWithEmailAndPassword(email, password)
            resetFormField()
        } catch (err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break
                case 'auth/invalid-credential':
                    alert('No user associated with this email')
                    break
                default:
                    console.log(err)
                    break
            }
        }
    }

    return <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmitForm}>
            <FormInput
                label="Email"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleChange}/>
            <FormInput
                label="Password"
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}/>
            <div className="buttons-container">
                <Button type="submit" buttonType="inverted">Sign in</Button>
                <Button onClick={signInWithGoogle} buttonType="google">Google sign in</Button>
            </div>
        </form>
    </div>
}


export default SignInForm