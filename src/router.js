import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
import Login  from  './pages/login'
import User from  './pages/user'
import Admindel from './pages/admin_del'
class RootRouter extends Component{
    render(){
        return (
            <App>
                <HashRouter>
                    <Route exact path='/' component={Login}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/user' component={User}></Route>
                    <Route exact path='/user/del' component={Admindel}></Route>
                </HashRouter>
            </App>
        )
        
    }
}
export default  RootRouter