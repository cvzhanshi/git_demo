import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
import Login  from  './pages/login'
import User from  './pages/user'
class RootRouter extends Component{
    render(){
        return (
            <App>
                <HashRouter>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/user' component={User}></Route>
                </HashRouter>
            </App>
        )
        
    }
}
export default  RootRouter