import {useState,useEffect} from 'react'
import {AiFillCheckSquare} from 'react-icons/ai'
import {BsBorderAll} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin4Line} from 'react-icons/ri'
import uniqid from 'uniqid';
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare} from 'react-icons/ai'
import Form from '../utils/Form'
import InfoCard from '../utils/infoCard'
import useAuth from '../useAuth'
import axios from 'axios'




export default function TaskComponent({data}){

	    // const [ tasks , setTasks ] = useState(()=>{
     //         const taskObj = JSON.parse(localStorage.getItem('task')) || []
     //         return taskObj 
     //     })
         const [ tasks , setTasks ] = useState([])
	    const [ status , setStatus ] = useState(0)
	    const [ taskInfo,setTaskInfo] = useState({title:"",description:""})
	    const [ taskTab,setTaskTab ] = useState(0)
	    const [ expand,setExpand] = useState(true)
	    const [ editID,setEditID] = useState(null)
	    const [ editInfo,setEditInfo] =useState({title:"",description:""})
	    const [ isEditing ,setIsEditing] = useState(false)

	    const {auth} = useAuth()

	    async function getAllTasks(){
             // console.log("hello")
	    	   try{
	    	   	if(auth.token){
	    	   	 await axios.get("/api/task/",{
		 	   		'headers': {
				                  'Authorization': (auth.token ? auth.token : "")    
				        }
				     }).then(res=>{
		 	   		    // console.log(res.data)
		 	   		    setTasks(res.data)
		 	          })
		     }

	    	   }catch(err){

	    	   	console.log(err)
	    	   }

	    }

	    // console.log(auth.token)

	    function expandAddQuestion(){
	    	setExpand(!expand)
	    }

	    function changeHandle(e){
	    	setTaskInfo({...taskInfo,[e.target.name]:e.target.value})
	    }

	    async function addTaskSubmit(e){
	    	e.preventDefault()
	    	if(taskInfo.title.length <= 0 ){
	    		   alert("input field cant be empty")
	    		   return;
	    	     }
	    	try{
           if(auth.token){
		 	await axios.post("/api/task/",taskInfo,{
		 	   		'headers': {
				                  'Authorization': (auth.token ? auth.token : "")    
				        }
				     }).then(res=>{
				     	// console.log(res.data)
				     	setTasks([...tasks,{...res.data}])
				     })
		 	}
		 	
	           
	       	// setTasks([...tasks,{id:uniqid(),...taskInfo,status:[1,0,0],read:true}])
	      	setTaskInfo({title:"",description:"",answer:""})
	    	}catch(err){
	    		console.log(err)
	    	}

	    	// console.log(e.target)
	    	
	    }

	    // console.log(tasks)


	    function filterTasks(status){
	    	setTaskTab(status)
	    }

	    async function deleteAllTasks(){
	    	try{
           	// console.log(auth.token)
	    		
           await axios.delete(`api/task/deleteall`,{
					        'headers': {
					            'Authorization': (auth.token ? auth.token : "")    
					        }
					     })
	    	 setTasks([])

	    	}catch(err){
	    		console.log(err)
	    	}

	    }


        useEffect(()=>{
           getAllTasks()
        },[auth.token])




        const taskFiltertabs = [{icons:<BsBorderAll/>,color:"bg-blue-500"},{icons:<AiFillCheckSquare/>,color:"bg-red-500"},{icons:<AiFillCheckSquare/>,color:"bg-orange-500"},{icons:<AiFillCheckSquare/>,color:"bg-green-500"}]
          
		return (
			  <div className="w-full bg-gray-100 flex flex-col items-center p-2">
			    

                      <Form 
                           taskInfo={taskInfo} 
                           addTaskSubmit={addTaskSubmit} 
                           changeHandle={changeHandle}
                           formName={"Task"}
                      />
                 <div className="flex justify-end px-2 w-full">
			           <button onClick={deleteAllTasks} className=" bg-red-500 px-2 text-white">Delete All Task</button>
                 </div>
			     <div className="max-w-md grid grid-cols-4 gap-1 w-full mt-2 cursor-pointer ">
			         {
			         	taskFiltertabs.map((m,i)=>{
			               return <div key={i} className={`w-full p-1 flex justify-center items-center ${m.color} text-white text-center cursor-pointer border-white ${taskTab === i ?"border-dotted" : ""} border-2`} onClick={()=>filterTasks(i)}>{m.icons}</div>
			         	})

			         }
			     </div>


		         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full mt-5 overflow-y-auto">    
				     <InfoCard 
				        infoName={"task"}
				        tasks={tasks} 
				        setTasks ={setTasks} 
				        taskTab={taskTab} 
				        setDynamicBackgroundColor={true}
				        setHeight={"h-40"}
				        haveIconName={false}
				        haveAnswer={false}
				        setInfoBackground={""}
				     />
				 </div>
			  </div>
			)
	}