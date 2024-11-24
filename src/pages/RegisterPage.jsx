import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/api/users/register', {name,email,password});
            console.info('User registered')
        }catch(err){
            console.error('Registration failed', err)
        }
    }
    return(
        <div className="register-page">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </>
                <>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </>
                <>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </>
            </form>
        </div>
    )
}

export default RegisterPage;