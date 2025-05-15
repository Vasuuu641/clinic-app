import { useState } from "react";
import {users} from "../data/users";
import { useNavigate } from 'react-router-dom';

function Registration(){

    const[user, setUser] = useState('');

    const[password, setPassword] = useState('');

    const[confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    //handleSubmit function

    function handleSubmit(e)
    {
      e.preventDefault();

      //Validation of fields
      if(!user || !password || !confirmPassword){
        setError("All fields are required!");
        return;
      }

      //Check if a user already exists
      const existingUser = users.find(u => u.name === user);

      if(existingUser){
        setError("Enter a different username! This username is unavailable");
        return;
    
      }

      if(password !== confirmPassword){
        setError("Passwords don't match!");

        setuser('');
        setPassword('');
        setConfirmPassword('');

        return;
      }

      const newUser = {
        id : users.length + 1,
        name: user,
        password: password,
        role: 'patient'
      };

      users.push(newUser);
      navigate('/login');


    }


return(
  
<form onSubmit={handleSubmit}>

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
    type="password" 
    name="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </label>
  <br />

  <label>
    Confirm Password: 
    <input 
    type = "password" 
    name = "password"
    value = {confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </label>
  <br />


<button type = "submit">Submit</button>
</form>

  );
}

export default Registration;





