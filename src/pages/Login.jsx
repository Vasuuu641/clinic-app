import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/users';


function Login(){
    const[user, setUser] = useState('');

    const[password, setPassword] = useState('');

    const[error, setError] = useState('');

    const navigate = useNavigate();

    //handleSubmit function

    function handleSubmit(e)
    {
        e.preventDefault();

        //validating the fileds
        if(!user || !password){
            setError("Name and Password are required fields!");
        }

        

        const existingUser = users.find(u => u.name === user);

        if(!existingUser)
        {
            setError("Please register first! User not found");
        }

        if(existingUser.password !== password){
            setError("Invalid pasword");
        }

        setError(""); // Clear any previous errors
        navigate("/dashboard");

    }


    
    return(
        <div>
            <form onSubmit = {handleSubmit}>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label>
                Name:  
                <input 
                type="text" 
                name="name" 
                value = {user}
                onChange={(e) => setUser(e.target.value)}
                />

            </label>

            <br />

            <label>
                Password:
                <input 
                type = "password" 
                name = "password" 
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                />

            </label>

            <br />

            <button type = "submit">Submit</button>

        </form>

        <h3>Don't have an account yet? Register now at <Link to="/register">Register</Link></h3>
        </div>

    );
}

export default Login;