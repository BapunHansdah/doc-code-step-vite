

const INITIAL_STATE = {
  user: [],
  isLoggedIn: false,
  token: "",
};

export const authReducer = (state=INITIAL_STATE ,action) =>{
   if(action.type === "GET_TOKEN"){
      return {...state,token:action.payload}
   }
   if(action.type === "GET_USER_INFO"){
      return {...state,user:action.payload}
   }
    if(action.type === "IS_SIGN_IN"){
      return {...state,isLoggedIn:action.payload}
   }
   return state
}




