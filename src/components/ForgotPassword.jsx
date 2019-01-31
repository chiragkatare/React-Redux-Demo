import React from "react";
// import { Redirect } from "react-router-dom"
import { Card, Button, CardContent, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";


class ForgotPassword extends React.PureComponent {

    state = {
        email: '',
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleClick() { }

    render() {
        // console.log(this.state);

        return (
            <div className='formcard-div' style={{ display: "flex" }}>
                {/* {alert("hello")} */}
                <Card className="login-card">
                    <img className="login-logo" src={require("../Assets/Images/logo.png")} alt="" />
                    <CardContent>
                        <Typography>Enter your registered Email address and we'll send you a link to reset your password.
</Typography>
                        <div>
                            <TextField name="email" type='TextField' fullWidth label="Email"  onChange={this.handleChange} />
                        </div>
                        <CardContent>
                            <Button id='login-btn' className='login-btn' fullWidth variant='contained' >
                                Submit
                </Button>
                        </CardContent>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispacheToProps = (dispatch) => {
    return {
        setLoggedIn: dispatch({
            type: "ADD",
            payload: true
        })
    }
}

export default ForgotPassword;