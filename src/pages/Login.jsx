function Login(){
    return(
        <form>
            <label>
                Name:  
                <input type="text" name="name" />

            </label>

            <br />

            <label>
                Password:
                <input type = "password" name = "password" />

            </label>

            <br />

            <button onClick={() => handleSubmit()}>Submit</button>
        </form>

    );
}

export default Login;