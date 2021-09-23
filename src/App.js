import React from "react"
import './App.css';
import {BrowserRouter, Switch,Route} from "react-router-dom";
import contactUs from './components/contactUs';
import home from './components/home';
import contactUsMessage from './components/contactUsMessage';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path = "/" component = {home}></Route>
    <Route exact path = "/contactus" component = {contactUs}></Route>
    <Route exact path = "/contactus/:id" component = {contactUsMessage}></Route>


    </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
