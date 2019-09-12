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
                <button onClick={this.tange.bind(this,'/updateUser')}>修改</button>
                {this.props.children}
            </div>
        )
    }
}
export default Login