import {useState,useEffect} from 'react'
import {AiFillCheckSquare} from 'react-icons/ai'
import {BsBorderAll} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin4Line} from 'react-icons/ri'
import uniqid from 'uniqid';
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare} from 'react-icons/ai'




export default function TaskComponent({data}){

	    const [ tasks , setTasks ] = useState([])
	    const [ status , setStatus ] = useState(0)
	    const [ taskInfo,setTaskInfo] = useState({title:"",description:""})
	    const [ taskTab,setTaskTab ] = useState(0)
	    const [expand,setExpand] = useState(true)
	    const [editID,setEditID] = useState(null)
	    const [editInfo,setEditInfo] =useState({title:"",description:""})
	    const [isEditing ,setIsEditing] = useState(false)



	     function expandAddQuestion(){
	    	setExpand(!expand)
	    }

	    function changeHandle(e){
	    	setTaskInfo({...taskInfo,[e.target.name]:e.target.value})
	    }

	    // function addTaskSubmit(e){
	    // 	e.preventDefault()
	    // 	addTask()

	    // }

	    function addTaskSubmit(e){
	    	e.preventDefault()
	    	console.log(e.target)
	    	if(taskInfo.title.length <= 0 ){
	    		alert("input field cant be empty")
	    		return;
	    	}
	    	console.log(taskInfo)
	    	setTasks([...tasks,{id:uniqid(),...taskInfo,status:[1,0,0],read:true}])
	    	setTaskInfo({title:"",description:""})
	    }

	    // console.log(tasks)

	    function editTask(id,title,description){
	    	setEditID(editID === null ? id : null )
	    	const setRead = tasks.map((r,i)=>{
	    		if(id === r.id){
	    			return {...r,read:!r.read,...editInfo}
	    		}else{
	    			return {...r,read:true}
	    		} 
	    	})
	    	setTasks(setRead)
	    	setEditInfo({title:title,description:description})
	    	setIsEditing(!isEditing)
	    }
	    function deleteTask(id){
	    	const setDelete = tasks.filter((d,i)=>d.id!==id)
	    	setTasks(setDelete)
	    }

	    function editChangeHandle(e){

	    	setEditInfo({...editInfo,[e.target.name]:e.target.value})
         
	    }

	    function setCurrentStatus(taskId,statusId){
	    	const c_status = tasks.map((t,i)=>{
	    	    if(t.id === taskId){
	    	    	 const st = t.status.map((s,i)=>{
	    	    		if(i === statusId){
	    	    			return 1
	    	    		}else{
	    	    			return 0
	    	    		}
	    	    	})

	    	    	return {...t ,status:st}

	    	    }
	    	    else{
	    	    	return {...t}
	    	    }
	    	})
	    	setTasks(c_status)
	    }

	    function filterTasks(status){
	    	// const todo = tasks.filter((task,i)=> task.status.indexOf(1) === status )
	    	setTaskTab(status)
	    	// setTasks(todo)
	    }


        const taskFiltertabs = [{icons:<BsBorderAll/>,color:"bg-blue-500"},{icons:<AiFillCheckSquare/>,color:"bg-red-500"},{icons:<AiFillCheckSquare/>,color:"bg-orange-500"},{icons:<AiFillCheckSquare/>,color:"bg-green-500"}]


		return (
			  <div className="w-full bg-gray-100 flex flex-col items-center p-2">
			    

                      <div className="w-full flex flex-col gap-2 p-2">
			  	           <div className="font-semibold cursor-pointer justify-center bg-blue-500 p-2 text-white text-center flex items-center gap-2"  onClick={expandAddQuestion}>Add Tasks<span className={`${!expand?"-rotate-180":""} transition-all text-2xl`}>{expand?<AiFillPlusSquare/>:<AiFillMinusSquare/>}</span></div>
			  	           <div className={`${expand ?"block" :"hidden"}`}>
			  	           <form onSubmit={addTaskSubmit} className="flex flex-col gap-2">
			  	             <input className="bg-white p-2 w-full h-[50px]" name="title" placeholder="title"  value={taskInfo.title}  onChange={changeHandle}/>
			  	             <textarea className="bg-white p-2 w-full h-[200px]" name="description" placeholder="question" value={taskInfo.description} onChange={changeHandle}></textarea>
			  	             <div><button className="bg-blue-500 p-2 text-white">Add Task</button></div>
			  	           </form>
			  	           </div>
			  	      </div>



			     <div className="max-w-md grid grid-cols-4 gap-1 w-full mt-2 cursor-pointer">
			         {
			         	taskFiltertabs.map((m,i)=>{
			               return <div key={i} className={`w-full p-1 flex justify-center items-center ${m.color} text-white text-center cursor-pointer border-white ${taskTab === i ?"border-dotted" : ""} border-2`} onClick={()=>filterTasks(i)}>{m.icons}</div>
			         	})

			         }
			     </div>

			     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full mt-5 overflow-y-auto">
			     	{
			  tasks.filter(t=> taskTab === 0 ? t : t.status.indexOf(1)=== taskTab - 1 ).map((m,i)=>{
			   	

			   		return(
				         <div className={` ${m.status.indexOf(1) === 0 ? "bg-red-400":  m.status.indexOf(1) === 1 ? "bg-orange-400" : "bg-green-400" } w-full p-2 shadow`} key={m.id}>
				     	    <div className="flex justify-between gap-2">
				     	      <div className="flex gap-2">
				     	         {
				     	           m.status.map((s,s_i)=>{
				     	           	 return (
				     	           	 	    // 
				     	                    <div key={s_i} className={`bg-white ${ m.status.indexOf(1) === s_i ? "text-blue-500":"text-white" } cursor-pointer`} name="status" onClick={()=>setCurrentStatus(m.id,s_i)}><AiFillCheckSquare/></div>
				     	           	 	)
				     	           })
				     	         }
				     	      </div>
				     	       <div className="flex gap-2">
				     	         <button className={`cursor-pointer text-black ${!isEditing || !m.read && editID === m.id ? "opacity-100" : "opacity-50"}`} onClick={()=>editTask(m.id,m.title,m.description)} disabled={!isEditing || !m.read && editID === m.id ? false : true}><BiEditAlt/></button>
				     	         <button className={`cursor-pointer text-black ${!isEditing  ? "opacity-100" : "opacity-50"}`} onClick={()=>deleteTask(m.id)} disabled={ !isEditing ? false : true }><RiDeleteBin4Line/></button>
				     	         
				     	       </div>
				     	    </div>
				     	    <div className={`${m.read ? "block":"hidden"} overflow-y-auto h-full h-40 mt-2`}>
				     	     	<div className="font-semibold mt-1 w-full p-1 text-sm break-all">{m.title}</div>
				     	     	<div className="text-sm p-1 mt-1  w-full break-all text-black">{m.description}</div>
				     	  	</div>
				     	  	<div className={`${m.read ? "hidden":"block"} h-40 mt-2`}>
				     	  	   <input className="font-semibold mt-1 w-full p-1 text-sm bg-white"  name="title" value={editInfo.title} onChange={editChangeHandle}/>
				     	  	   <textarea className="text-sm h-32 p-1 mt-1 text-gray-800 w-full" name="description" value={editInfo.description} onChange={editChangeHandle}/>
				     	  	</div>
				     	</div>
			     	   )

			     
			         }).reverse()
			     	}
			     	  
			    
			     </div>
			  </div>
			)
	}