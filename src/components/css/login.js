import "../css/login.css"
const LogIn = () => {
    return (
      <body>
      <div class="container">
      <div class="login-container">
        <div class="form-container">
          <h1 className="opacity">Log In</h1>
          <p>Please fill out the form to create account</p>
          <hr/>
          <form action="/">
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
      
          <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
          

          <p>By creating an account you agree to our <a href="#" style={{color:"deep-red"}}>Terms & Privacy</a>.</p>
          <button className="opacity" type="submit">Log In</button>
          </form>
          </div>
          </div>
        </div>
        </body>
     
    );}
  
  export default LogIn;