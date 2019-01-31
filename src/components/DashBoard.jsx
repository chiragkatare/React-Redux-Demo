import React from "react";
// import { Redirect } from "react-router-dom"
import { Card, Button, CardContent, TextField, Drawer } from "@material-ui/core";
import {connect} from "react-redux";


class DashBoard extends React.PureComponent {

    state = { 
   
    }




    render() {
        // console.log(this.state);
        
        return (
            <div >
               <Drawer className="sidedrawer-dashboard" variant='permanent' >
               <Button className="" >Pending</Button>
               </Drawer>
            </div>
        );
    }
}   


//connectins states to props via store
const mapStateToProps = (state)=>{
    return {
      isLoggedIn : state.isLoggedIn
    }
  }
  
  //connecting action to props
  const mapDispacheToProps = (dispatch)=>{
    return {
      setLoggedIn : dispatch({
        type :"ADD",
        payload: true
      })
    }
  }

  //connecting the Component to state
  export default connect(mapStateToProps,mapDispacheToProps)(DashBoard)