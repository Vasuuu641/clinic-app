function Registration(){
    return(
<form>
  <label>
    Name:  
    <input type="text" name="name" />
  </label>
  <br />

  <label>
    Password: 
    <input type="password" name="password" />
  </label>
  <br />

  <label>
    Confirm Password: 
    <input type = "password" name = "password" />
  </label>
  <br />

  
<button onClick={() => handleSubmit()}>Submit</button>
  
</form>

    );
}

export default Registration;





