import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefalut();
        try{
            const response = await axios.post('/api/users/login', {email,password});
            console.log(response);
            localStorage.setItem('aithToken', response.data.token);
            history.push('/profile')
        }catch(err){
            console.error('Login failed', err)
        }
    }
    return(
        <div className='login-page'>
            <h2>Login</h2>
            <form onSubmit = {handleLogin}>
                <>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </>
                <>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;