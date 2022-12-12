import axios from 'axios'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import uniqid from 'uniqid';

export default function(){
	  const [userInfo,setUserInfo] = useState({name:'',token:'',repo:''})
     const [user,setUser] = useState("")
     const [token,setToken] = useState("")
     const [repo,setRepo] = useState([])
     const [repoName,setRepoName] = useState("")
     const [errMsg,setErrMsg] = useState({msg:"",color:""})
     const [timer,setTimer] = useState(false)

     const [projects,setProjects] = useState(()=>{
		return JSON.parse(localStorage.getItem('project')) || []
	})

     
     const navigate = useNavigate()

     function handleChangeUser(e){
        setUser(e.target.value)
     }

     function handleChangeToken(e){
        setToken(e.target.value)
     }

	 function findRepo(user,token){
	 	if(user.length <=0){
	 		alert("username can't be empty")
	 		return;
	 	}
	 	if(token.length <=0){
	 		setErrMsg({msg:"Limited !! Add token to get more response",color:"bg-blue-500"})
	 	}
     
   	axios.get(`https://api.github.com/users/${user}/repos`,{
 	     'headers': {
               'Authorization': (token ? `token ${token}` : "") 
         }
        }).then((res)=>{
            setErrMsg({msg:'success',color:'bg-green-500'})
 		      setRepo(res.data)
 		      return res.data
 	     }).catch((err)=>{
 	     	   setErrMsg({msg:err.response.data.message,color:"bg-red-500"})
        	   return err.response.data.message
 	     })
	 }
	 function RepoChangeHandle(e){
	 	setRepoName(e.target.value)
	 }

	 function open(){
	 	   setTimer(true)
	 	   if(timer){
	 	   	alert('wait for a second')
	 	   	return;
	 	   }
	 	   setUserInfo({name:user,token:token,repo:repoName})
	 	   setProjects([...projects,{id:uniqid(),time:new Date(),name:user,token:token,repo:repoName}])
	      setTimeout(()=>{
	      	navigate('/main')
	      	setTimer(false)
	      }, 1000);
	 }
   

	 useEffect(()=>{
	 	   localStorage.setItem('info',JSON.stringify(userInfo))
	 	   localStorage.setItem('project',JSON.stringify(projects))
	 },[projects,userInfo])

	 

	return(
		  <div className="flex h-[600px] items-center justify-center">
              <div className="max-w-md w-full gap-5 flex flex-col px-2">
                 <div className="text-2xl">Find Github User</div>
                 <div className={`${errMsg.color} p-2 text-white text-center font-bold ${errMsg.msg ? "block":"hidden"}`}>{errMsg.msg}</div>
                 <div className="flex w-full flex-col gap-5">
                      <input className="p-2 bg-white text-black border border-black" value={user} onChange={handleChangeUser} placeholder="name" required={true}/>
                      <input className="p-2 bg-white text-black border border-black" value={token} onChange={handleChangeToken} placeholder="token" type="password" required={true}/>
                      <button className="p-2 bg-blue-500 text-white" onClick={()=>findRepo(user,token)}>search</button>
                  </div>
                  <div>
                     <select type="option"  onChange={RepoChangeHandle} className="w-full p-2 text-black border border-black">
							      	    	  <option className="text-black" value={""}>select repository</option>

						  {
						  	repo.map((t,i)=>{
				                 return (
							      	    	  <option key={i} className="text-black" value={t.name}>{t.name}</option>
				                 	)
						  	})
						  }
		      	</select>

                  </div>
                  <div><button className="bg-blue-500 px-2 py-1 text-white" onClick={open}>open</button></div>
              </div>

		  </div>
		)
} 