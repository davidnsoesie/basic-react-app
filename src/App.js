import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
function App() {
  const [input, setInput] = useState({})
  const [loginState, setLoginState] = useState(false)
  const handleInput = (e)=> {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const submitAuth = (e) => {
    e.preventDefault()
    console.log(input)
    if(true){
      setLoginState(false)
       return <Redirect to="/dashboard"/>
    }
    setLoginState(true)
    return 
  }
  return (
    <div className="App">
            <div className="loginbox">
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="username" value={input.username || ''} placeholder="Enter Username" onChange={handleInput}/>
                    <p>Password</p>
                    <input type="password" name="password" value={input.password || ''} placeholder="Enter Password" onChange={handleInput}/>
                   
                    <input type="submit" name="" value="Login" href='/dashboard' onClick={submitAuth}/>
                    <a style={{color: 'red', visibility: loginState? 'visible':'hidden'}}>Login unsuccessful</a><br/>
                    <a href="#">Lost your password?</a><br/>
                    <a href="#">Don't have an account?</a>
                </form>
            </div>
    </div>
  );
}

export default App;
