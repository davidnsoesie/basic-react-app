
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // Redirect
  } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./components/dashboard";


  export default ()=>(
      <Router>
          <Switch>
            <Route path='/' component={App}></Route>
             <Route path='/dashboard' component={Dashboard}/>
          </Switch>
      </Router>
  )