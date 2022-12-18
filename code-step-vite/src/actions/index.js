export function get_Token(value){
	return{
		type:"GET_TOKEN",
		payload:value
	}

}

export function get_UserInfo(value){
	console.log(value)
	return{
		type:"GET_USER_INFO",
		payload:value
	}

}

export function sign_in(value){
	return{
		type:"IS_SIGN_IN",
		payload:value
	}

}

