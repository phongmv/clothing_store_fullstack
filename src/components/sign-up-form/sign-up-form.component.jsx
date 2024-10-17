import {useState} from "react";
import {createAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.util";
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formField

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormField({...formField, [name]: value})
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }
        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log('response', response)
        } catch (err) {
            console.log("Error creating the user: ", err.message)
        }
    }

    return <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="display-name">Display name</label>
            <input
                id="display-name"
                type="text"
                name="displayName"
                required
                value={displayName}
                onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}/>

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
                id="confirm-password"
                type="password"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={handleChange}/>
            <button type="submit">Sign up</button>
        </form>
    </div>
}


export default SignUpForm