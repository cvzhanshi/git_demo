import React,{Component} from 'react'
class Login extends Component {
    render(props){
        return (
            <div>
                这里是用户界面
                {this.props.children}
            </div>
        )
    }
}
export default Login