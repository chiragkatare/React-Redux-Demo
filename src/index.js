

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider  } from "react-redux";
import store from './Store';





  


ReactDOM.render(<Provider store = {store} > <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




// const reducer = (state,action)=>{
//     switch (action.type) {
//       case "ADD":
//         state = {...state,number:state.number+action.payload,ll:"jj"}
//         break;
    
//         case "SUBTRACT":
        
//         break;
  
//       default:
//         break;
//     }
//     return state ;
//   }

//   var initState = { 
//       name: null ,
//       number: 1
//   }



//   console.log("Sssdsds");
//   const store = createStore(reducer,initState,applyMiddleware(logger));
// //   debugger   
  
//   store.subscribe(()=>{
//     //   debugger
//     console.log("Store Updates",store.getState());
//     var ll = store.getState()
    
//   });
//   store.dispatch({
//     type:"ADD",
//     payload: 22,
//   });
  
  
