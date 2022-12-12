import {useState,useEffect} from 'react'
import {RiAddBoxLine} from 'react-icons/ri'
import {Link,useNavigate} from 'react-router-dom'
import moment from 'moment'

export default function ProjectList(){

     const [projectList,setprojectList] = useState(()=>{
     	return JSON.parse(localStorage.getItem('project')) || []
     })

     const navigate = useNavigate()
     
     function openProject(name,repo,token){
     	localStorage.setItem('info',JSON.stringify({name,token,repo}))
     	setTimeout(()=>{
     	  navigate('/main')
     	},1000)
     }
	return(
		  <>
		   <h1 className="text-2xl font-semibold p-2">Project List</h1>
           <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 p-2 gap-2">
           <div className="border bg-white flex items-center justify-center gap-2 h-60 p-2 bg-blue-100 shadow cursor-pointer">
		  	   <div className="font-semibold text-5xl flex justify-center items-center text-blue-500"><Link to="/"><RiAddBoxLine/></Link></div>
		   </div>
		  
		  {
		  	projectList.map((m,i)=>{
		  		return (
		  			   <div  onClick={()=>openProject(m.name,m.repo,m.token)} key={i}>
		  			      <div className="border bg-white gap-2 h-60 p-2 shadow cursor-pointer flex flex-col justify-between">
		  			        <div>
		  			       	<div className="font-semibold text-blue-500 text-lg lowercase">{m.name}</div>
		  			    	     <div className="font-semibold text-lg opacity-80">{m.repo}</div>
		  			    	    </div>
		  			    	    <div>
		  			       	 <div className="font-bold text-xs flex justify-end">{moment(m.time).format('hh:mm DD MMM yyyy')}</div>
		  			       	</div>
		  			      </div>
		  			    </div>
		  			)
		  	}).reverse()
		  }

		               
		  
		  </div>
</>

		)
}