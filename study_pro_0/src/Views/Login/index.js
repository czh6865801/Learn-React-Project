import React from 'react';
import './index.css';
import Particles from 'reactparticles.js';
import NormalLoginForm from "./Form";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  submit = (val) => {
    React.$api.WEATHER().then(res => {
      console.log(res)
    })
    this.props.history.push({
      pathname: '/Layout',
      query: {
        message: '已登录成功'
      }
    })
  }
  render() {
    return (
      <div className="Login" id="qq" >
        <div className="login-form-content">
          <div className="login-form-box">
            <NormalLoginForm submit={this.submit}></NormalLoginForm>
          </div>
        </div>
        <Particles
          id="config-1"
          style={{
            display: "flex"
          }}
          className="Login-header"
        />
      </div>
    );
  }
}

export default Login;
