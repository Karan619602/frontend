import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Register } from './user/users';
import { Home } from './home';
import { Login } from './user/login';
import Log from './user/logout';
import Header from './header';
import { loaduser, updateUser } from './actions/authactions';
import { useEffect } from 'react';
import store from './store'

import ProtectedRoute from './user/route.js'
import Profile from './user/profile';
import Dashboard from './user/dashboard';
import UpdateUser from './user/updatestatus';
function App() {

  useEffect(()=>{
    store.dispatch(loaduser())
  },[])

  return (
   <Router>
    <Header/>
     <Home/>

     <Route path="/register"  component={Register} exact />
     <Route path="/login"  component={Login} exact />
<Route path="/logout" component={Log} exact/>
<ProtectedRoute path="/profile" component={Profile} exact/>
<ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact/>
<ProtectedRoute path="/admin/drivers/:id" isAdmin={true}  component={UpdateUser} exact/>

   </Router>
  );
}

export default App;
