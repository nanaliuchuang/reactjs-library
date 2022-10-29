import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "./userSlice";
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggeIn: true
        }))
    }
    return(
        <div className="login">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Create an Account</h1>
                <input type="name" placeholder="Usename" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="sumit" className="submit-btn">Signup</button>
                <p className="signup">Already have an account? <Link to={'/'} className='link'>Signin</Link></p>
            </form>
        </div>
    )
}
export default Signup;