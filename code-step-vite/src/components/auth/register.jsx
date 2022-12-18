import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'

function SignUp(){

	const [reg_info,setReg_info]  = useState({})
  const navigate = useNavigate()
     
   async function signUpUser(e){
     e.preventDefault()
     try{
        await axios.post('/api/auth/register',reg_info)    
        navigate('/verify') 	
     }catch(err){
     	  console.log(err)
     }

   }

   function handleChange(e){
   	setReg_info({...reg_info,[e.target.name]:e.target.value})
   }



	return(	
		<div className="max-w-sm mx-auto">
             <form className="flex flex-col gap-2 mt-20 p-2" onSubmit={signUpUser}>
               <h1 className="text-5xl font-semibold mb-2">Create Account</h1>
             	<input className="w-full p-2 border border-black" onChange={handleChange} placeholder="username"  name="username" />
             	<input className="w-full p-2 border border-black" onChange={handleChange} placeholder="email"     name="email"/>
             	<input className="w-full p-2 border border-black" onChange={handleChange} placeholder="password"  name="password"/>
             	<button className="w-full p-2 bg-blue-500 text-white mt-2">Sign Up</button> 
             	<p className="text-center">Already have an account ? <span className="underline"><Link to="/sign">Log in</Link></span></p>
             </form>
		</div>
	)
}

export default SignUp;
