import {useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import uniqid from 'uniqid';


export default function BugComponent({issues}){

	   const [issueId,setIssueId] = useState(null)
	   const [ tasks , setTasks ] = useState(()=>{
             const taskObj = JSON.parse(localStorage.getItem('task')) || []
             return taskObj 
       })

	   function expandIssue(ind){
	   	  // console.log(ind)
	   	  setIssueId(ind)
	   }

	   function addTask(title){
	    	setTasks([...tasks,{id:uniqid(),title:title,description:"",status:[1,0,0],read:true}])
	   }

	   useEffect(()=>{
           // console.log("saved to localStorage")
           localStorage.setItem('task',JSON.stringify(tasks))       
         },[tasks])





	    // console.log(issues)
		return (
			  <div className="flex w-full overflow-scroll p-2 bg-gray-100">
			  <div className=" h-[500px] flex gap-2 flex-col w-full">
			  	{
			  		issues && issues.map((issue,i)=>{
			  			return (
			  				  <div key={issue.id} className="bg-white w-full rounded  p-5 border">
			  				    <div className="flex flex-col gap-5 w-full justify-between">
			  				      <div className="flex items-center gap-2">
			  				         <img className="w-10 object-cover rounded-full" src={issue.user.avatar_url}/>
			  				         <div className="font-semibold text-sm break-all sm:text-md">{issue.user.login}</div>
			  				      </div>
			  				      <div className="flex items-center gap-5">
			  				         <h1 className="text-black flex text-sm font flex-wrap cursor-pointer break-all" onClick={()=>expandIssue(i)}>{issue.title}</h1>
			  				      </div>
			  				      <div className="h-full flex gap-2">
			  				         <span onClick={()=>addTask(issue.title)} className="bg-green-500 md:font-bold text-white text-xs md:text-sm px-2 py-1 cursor-pointer">Add</span>
			  				         <a href={issue.html_url}  target="_blank" className="bg-blue-500 md:font-bold text-white text-xs md:text-sm px-2 py-1">Check</a>
			  				      </div>
			  				    </div>
			  				  </div>
			  				)
			  		})
			  	}
			  </div>
			  </div>
			)
	}