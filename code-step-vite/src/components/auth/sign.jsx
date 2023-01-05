import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {sign_in} from '../../actions/index'
import {useNavigate} from 'react-router-dom'
function Login(){
  
   const [sign_info,setSign_info] = useState({})

   const dispatch=useDispatch()
   const navigate = useNavigate()

   async function signInUser(e){
   	e.preventDefault()
   	try{
   	  await axios.post('api/auth/signin',sign_info)
        dispatch(sign_in(true))
        navigate('/')
   	}catch(err){
   	  console.log(err)
   	}
   }

   function changeHandle(e){
   	setSign_info({...sign_info,[e.target.name]:e.target.value})
   }

   async function openDemo(user){
      try{
        await axios.post('api/auth/signin',user)
        dispatch(sign_in(true))
        navigate('/')
      }catch(err){
        console.log(err)
      }
}


	return(	
		<div className="max-w-sm mx-auto">
             <form className="flex flex-col gap-2 mt-20 p-2" onSubmit={signInUser}>
                <h1 className="text-5xl font-semibold mb-2">Login</h1>
             	<input className="w-full p-2 border border-black" onChange={changeHandle} name="email"placeholder="email" />
             	<input className="w-full p-2 border border-black" onChange={changeHandle} name="password"placeholder="password" />
             	<button className="w-full p-2 bg-blue-500 text-white mt-2">Login</button> 
               <div><button className="text-left text-sm cursor-pointer bg-black text-white px-2 py-1 rounded" onClick={()=>openDemo({email:"bapunhansdah777@gmail.com",password:"123456"})}>Login as Guest</button> </div>                             
             	<p className="text-right text-sm">Forgot password ?</p>            	            	
             	<p className="text-center">Not register yet ? <span className="underline"><Link to="/register">Create an account</Link></span></p>
             </form>
		</div>
	)
}

export default Login;