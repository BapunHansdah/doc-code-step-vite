import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function(){
	 const [userInfo,setUserInfo] = useState({name:'',repo:''})
     const [user,setUser] = useState("")
     const [repo,setRepo] = useState([])
     const [repoName,setRepoName] = useState("")
     
     const navigate = useNavigate()
     function handleChange(e){
        setUser(e.target.value)
     }

	 function findRepo(user){
	 	if(user.length <=0){
	 		alert("username can't be empty")
	 		return;
	 	}
	 	axios.get(`https://api.github.com/users/${user}/repos`).then((res)=>{
	 		setRepo(res.data)
	 	})
	 }
	 function RepoChangeHandle(e){
	 	setRepoName(e.target.value)
	 	setUserInfo({name:user,repo:e.target.value})
	 }

	 function open(){
	 	localStorage.setItem('info',JSON.stringify(userInfo))
        return navigate('/main')
	 }

	return(
		  <div className="flex h-[600px] items-center justify-center">
              <div className="max-w-md w-full gap-5 flex flex-col">
                 <div className="text-2xl">Find Github User</div>
                 <div className="flex w-full">
                      <input className="p-2 w-9/12 bg-white text-black" value={user} onChange={handleChange} placeholder="name" required={true}/>
                      <button className="p-2 bg-blue-500 w-3/12 text-white" onClick={()=>findRepo(user)}>search</button>
                  </div>
                  <div>
                     <select type="option"  onChange={RepoChangeHandle} className="w-full p-2 text-black">
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