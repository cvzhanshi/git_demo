import React,{Component} from 'react'
class Login extends Component {
    tange=(path)=>{
        this.props.history.push(`/user${path}`)
    }
    render(){
        return (
            <div>
                <button onClick={this.tange.bind(this,'/add')}>添加</button>
                <button onClick={this.tange.bind(this,'/del')}>删除</button>
                <button onClick={this.tange.bind(this,'/change')}>修改</button>
            </div>
        )
    }
}
export default Login