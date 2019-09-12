import React,{Component} from 'react'
class Login extends Component {
    taggle=(path)=>{
        this.props.history.push(path)
    }
    render(){
        return (
            <div>
                <button onClick={this.taggle.bind(this,'/user')}>登录成功</button>
            </div>
        )
    }
}
export default Login