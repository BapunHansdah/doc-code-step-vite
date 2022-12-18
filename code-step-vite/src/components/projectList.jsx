import {useState,useEffect} from 'react'
import {RiAddBoxLine} from 'react-icons/ri'
import {Link,useNavigate} from 'react-router-dom'
import moment from 'moment'
import {RiDeleteBin4Line} from 'react-icons/ri'
import {MdPreview} from 'react-icons/md'
import profileImage from './assets/image/profile.svg'
import {useSelector} from 'react-redux'
import useAuth from './useAuth'
import axios from 'axios'
import {AiFillProfile} from 'react-icons/ai'
import {RiLogoutBoxFill} from 'react-icons/ri'


export default function ProjectList(){

	  // const userInfo = useSelector(state=>state.authReducer)
	  const [userInfo,setUserInfo] = useState({})
	  const [loading,setLoading] = useState({})
	  const [projectList,setprojectList] = useState([])
	  const [isDropDownActive,setIsDropDownActive] = useState(false)

   // const [projectList,setprojectList] = useState(()=>{
   //   	return JSON.parse(localStorage.getItem('project')) || []
   //   })


	  const {auth} = useAuth()
     const navigate = useNavigate()


	 async function getUserData(){
          setLoading(true)
			  try{
			  	if(auth.token){
			    const res = await axios.get("/api/user/me",{
			        'headers': {
			                  'Authorization': (auth.token ? auth.token : "")    
			        }
			     }).then(res=>{
			     	  setUserInfo(res.data)
			     	  setLoading(false)
			     })
			  }
			  }catch(err){
			  	  console.log(err)
			  }
	 }


	 async function getProjectData(){
          setLoading(true)
			  try{
			  	if(auth.token){
			    await axios.get("/api/project",{
			        'headers': {
			                  'Authorization': (auth.token ? auth.token : "")    
			        }
			     }).then(res=>{
			     	  setprojectList(res.data)
			     	  setLoading(false)
			     })
			     
			  }
			  }catch(err){
			  	  console.log(err)
			  }
	 }
    
	 // console.log(auth.token)
     
    async function openProject(name,repo,token,projectID){
     	localStorage.setItem('info',JSON.stringify({name,token,repo}))
     	 try{
           if(auth.token){
		 	   	await axios.post("/api/project/setproject",{projectID:projectID},{
		 	   		'headers': {
				                  'Authorization': (auth.token ? auth.token : "")    
				        }
				     }).then(res=>{
		 	   		    // console.log(res.data)
		 	   	})
		 	   }
	 	   }catch(err){
	 	   	console.log(err)
	 	   }
     	setTimeout(()=>{
     	  navigate('/home')
     	},1000)
     }

     async function deleteProject(id,projectID){
     	 // console.log(id)
       try{
       await axios.delete(`api/project/${id}`,{
			        'headers': {
			            'Authorization': (auth.token ? auth.token : "")    
			        }
		 })
		  await axios.delete(`api/note/deleteall/${projectID}`,{
			        'headers': {
			            'Authorization': (auth.token ? auth.token : "")    
			        }
		 })
		   await axios.delete(`api/task/deleteall/${projectID}`,{
			        'headers': {
			            'Authorization': (auth.token ? auth.token : "")    
			        }
		 })
		    await axios.delete(`api/question/deleteall/${projectID}`,{
			        'headers': {
			            'Authorization': (auth.token ? auth.token : "")    
			        }
		 })
     	   setprojectList(projectList.filter(m=>m._id !== id))
       }catch(err){
         console.log(err)
       }
     }

     function openDropDown(){

     	setIsDropDownActive(!isDropDownActive)

     }

     async function signOut(){
     	 try{
     	    await axios.get('/api/auth/signout').then(res=>console.log(res)) 
     	    navigate('/sign')    	 	
     	 }catch(err){
     	   	console.log(err)
     	 }
     }

     useEffect(()=>{
     	  getUserData()
     	  getProjectData()
     },[auth.token])

     if(loading) return <>loading</>
     // console.log(projectList)
	return(
		  <>
		  		<div className="flex justify-between bg-blue-500 text-white p-2">
		         <h1 className="text-2xl font-semibold p-2">Project List</h1>
		         <div className="flex items-center gap-2 relative">
		  		      <div><img className="w-8 h-8 rounded-full object-contain cursor-pointer" onClick={openDropDown} src={userInfo.avatar}/></div>
		  		      <div className={`${isDropDownActive ? "block": "hidden"} shadow absolute bg-white top-10 right-10 w-44 rounded`}>
		  		          <h1 className="text-md font-semibold cursor-pointer text-black p-2">Hello , <span className="uppercase">{userInfo.username}</span></h1>
		  		          <span className="text-md font-semibold cursor-pointer text-black p-2 flex items-center gap-2 hover:bg-blue-100"><AiFillProfile/>Edit profile</span>
		  		          <span className="text-md font-semibold cursor-pointer text-black p-2 flex items-center gap-2 hover:bg-blue-100" onClick={signOut}><RiLogoutBoxFill/>Logout</span>		  		      
		  		      </div>
		  		      {/*<div className="text-md font-semibold cursor-pointer">Log out</div>*/}
		  		   </div>
		  		</div>
		     

           <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 p-2 gap-2">
           <Link to="/github">
           <div className="border bg-white flex items-center justify-center gap-2 h-60 p-2 bg-blue-100 hover:bg-blue-200 shadow cursor-pointer">
		  	   <div className="font-semibold text-5xl flex justify-center items-center text-blue-500"><RiAddBoxLine/></div>
		   </div>
		  </Link>
		  
		  {
		  	projectList.map((m,i)=>{
		  		return (
		  			   <div key={i}>
		  			      <div className="border bg-white gap-2 h-60 p-2 shadow   flex flex-col justify-between">
		  			         <div>
		  			    	        <div className="hover:text-blue-900 flex items-center text-lg justify-end cursor-pointer" onClick={()=>deleteProject(m._id,m.projectID)}><RiDeleteBin4Line/></div>
		  			         </div>
		  			        <div onClick={()=>openProject(m.name,m.repo,m.token,m.projectID)} className="flex gap-3 items-center cursor-pointer">
		  			          <div>
		  			       	   <div  className="font-semibold hover:text-blue-400 text-blue-500 text-lg lowercase">{m.name}</div>
		  			    	        <div className="font-semibold opacity-80">{m.repo}</div>
		  			    	     </div>
		  			    	  </div>
		  			    	  <div className="flex gap-1">
		  			    	     {/*<div><span className="font-semibold bg-blue-500 text-white px-2">{taskList.length} Tasks</span></div>*/}
		  			    	     {/*<div><span className="font-semibold bg-blue-500 text-white px-2">{questionList.length} Questions</span></div>*/}
		  			    	  </div>
		  			       	 <div className="font-bold text-xs flex justify-end">{moment(m.createdAt).format('hh:mm DD MMM yyyy')}</div>
		  			      </div>
		  			    </div>
		  			)
		  	}).reverse()
		  }

		               
		  
		  </div>
</>

		)
}