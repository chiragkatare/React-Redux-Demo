import React from "react";
// import { Redirect } from "react-router-dom"
import { Card, Button, CardContent, TextField } from "@material-ui/core";
import {connect} from "react-redux";


class Login extends React.PureComponent {

    state = { 
        username:'',
        password:'',
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    handleClick(){}

    render() {
        // console.log(this.state);
        
        return (
            <div className='formcard-div' style={{display:"flex"}}>
                <Card className="login-card">
                <img className="login-logo" src={require("../Assets/Images/logo.png")} alt=""/>
                <CardContent>
                    <div>
                    <TextField name="username" fullWidth  label="UserName" onChange={this.handleChange} />
                    </div>
                    <div>
                    <TextField name="password" type="password" fullWidth label="Password" onChange={this.handleChange} />
                    </div>
                    <CardContent>
                    <Button id='login-btn' className='login-btn' fullWidth variant='contained' >
                        Login
                </Button>
                </CardContent>
                </CardContent>
                </Card>
            </div>
        );
    }
}   

const mapStateToProps = (state)=>{
    return {
      isLoggedIn : state.isLoggedIn
    }
  }
  
  const mapDispacheToProps = (dispatch)=>{
    return {
      setLoggedIn : dispatch({
        type :"ADD",
        payload: true
      })
    }
  }

  export default connect(mapStateToProps,mapDispacheToProps)(Login)