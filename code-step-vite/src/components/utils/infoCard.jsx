import {useState,useEffect} from 'react'

import {AiFillCheckSquare} from 'react-icons/ai'

import {BsBorderAll} from 'react-icons/bs'

import {BiEditAlt} from 'react-icons/bi'

import {RiDeleteBin4Line} from 'react-icons/ri'

import axios from 'axios'

import useAuth from '../useAuth'


export default function InfoCard({infoName,tasks,setTasks,taskTab,setDynamicBackgroundColor,setHeight,haveIconName,haveAnswer,haveLabel,setInfoBackground}){


	    const [ isEditing ,setIsEditing] = useState(false)
	    const [ editInfo,setEditInfo] =useState({title:"",description:"",answer:""})
	    const [ editID,setEditID] = useState(null)


	    const {auth} = useAuth()




	    async function editTask(id,title,description,answer){
	    	try{
	    		  if(isEditing){
	    			await axios.put(`api/${infoName}/edit/${id}`,editInfo,{
	    			'headers': {
					            'Authorization': (auth.token ? auth.token : "")    
					           }
		    		}).then(res=>{
		    			// console.log(res.data)
		    		})
		    	}
	    	

		    	setEditID(editID === null ? id : null )
		    	const setRead = tasks.map((r,i)=>{
		    		if(id === r._id){
		    			return {...r,read:!r.read,...editInfo}
		    		}else{
		    			return {...r,read:true}
		    		} 
		    	})
		    	setTasks(setRead)
		    	setEditInfo({title:title,description:description,answer:answer})
		    	setIsEditing(!isEditing)

	    	}catch(err){
	    		console.log(err)
	    	}

	    }
	    async function deleteTask(id){
	    	// console.log(id)
		       try{
		                 await axios.delete(`api/${infoName}/delete/${id}`,{
					        'headers': {
					            'Authorization': (auth.token ? auth.token : "")    
					        }
					     })
		     	   const setDelete = tasks.filter((d,i)=>d._id!==id)
	    	       setTasks(setDelete)
		       }catch(err){
		         console.log(err)
		       }
	    	
	    }

	    function editChangeHandle(e){

	    	setEditInfo({...editInfo,[e.target.name]:e.target.value})
         
	    }

	    async function setCurrentStatus(taskId,statusId){	
		        const c_status = tasks.map((t,i)=>{
	    	    if(t._id === taskId){
	    	    	 const st = t.status.map((s,i)=>{
	    	    		if(i === statusId){
	    	    			return 1
	    	    		}else{
	    	    			return 0
	    	    		}
	    	    	})
	    	    	saveTaskStatus(taskId,st)
	    	    	return {...t ,status:st}

	    	    }
	    	    else{
	    	    	return {...t}
	    	    }
	    	})
	    	setTasks(c_status)
	    }

	   async function saveTaskStatus(id,status){
	   	try{	   		
			await axios.put(`api/${infoName}/edit/${id}`,{status:status},{
			'headers': {
			            'Authorization': (auth.token ? auth.token : "")    
			           }
    		}).then(res=>{
    			// console.log(res.data)
    		})
    	 }
    	 catch(err){
    	 	console.log(err)
    	 }
	   }


  // console.log(tasks)
   // return null

	return(
			 
             tasks.filter(t=> taskTab === 0 ? t : t.status.indexOf(1)=== taskTab - 1 ).map((m,i)=>{
			   		return(
				         <div className={` ${setDynamicBackgroundColor ?  m.status.indexOf(1) === 0 ? "bg-red-400":  m.status.indexOf(1) === 1 ? "bg-orange-400" : "bg-green-400" : "bg-gray-300" } w-full p-2 shadow`} key={m._id}>
				     	    <div className="flex justify-between gap-2">
				     	      <div className="flex gap-2 ">
				     	        <div className="flex gap-2"> 
				     	         {
				     	           m.status.map((s,s_i)=>{
				     	           	 return (
				     	           	 	    // 
				     	                    <div 
				     	                        key={s_i} 
				     	                        className={` ${ m.status.indexOf(1) === s_i ? "text-blue-500":"text-white" } cursor-pointer flex items-center`} 
				     	                        name="status" 
				     	                        onClick={()=>setCurrentStatus(m._id,s_i)}>
				     	                        <AiFillCheckSquare className="shadow-md"/>
				     	                    </div>
				     	           	 	)
				     	           })
				     	         }
				     	         </div>
				     	         <div>{
				     	         	  haveIconName ? m.status.indexOf(1) === 1 ? 
				     	         	  <span className="bg-green-500 px-2 text-white font-semibold text-sm">Solved</span> : 
				     	         	  <span className=" bg-red-500 font-semibold px-2 text-white text-sm">Unsolved</span> : 
				     	         	  ""
				     	         	  }
				     	         </div>
				     	      </div>

				     	       <div className="flex gap-2">
				     	         <button 
				     	               className={`cursor-pointer text-black ${!isEditing || !m.read && editID === m._id ? "opacity-100" : "opacity-50"} flex items-center font-semibold`} 
				     	               onClick={()=>editTask(m._id,m.title,m.description,m.answer)} 
				     	               disabled={!isEditing || !m.read && editID === m._id ? false : true}>
				     	               <BiEditAlt/>{haveIconName ? "Edit" : ""}
				     	         </button>
				     	         <button 
				     	               className={`cursor-pointer text-black ${!isEditing ? "opacity-100" : "opacity-50"} items-center flex font-semibold`} 
				     	                onClick={()=>deleteTask(m._id)} 
				     	               disabled={ !isEditing ? false : true }>
				     	               <RiDeleteBin4Line/>{haveIconName ? "Delete" : ""}
				     	         </button>
				     	       </div>
				     	    </div>
{/*----------------------------------------------------------info--------------------------------------------*/}

				     	    <div className={`${m.read ? "block":"hidden"} ${setHeight} overflow-y-auto mt-2`}>
				     	  	    {haveLabel ? <label className="font-semibold">Question</label>: <></>}
				     	     	<div className={`font-semibold mt-1 w-full p-1 text-sm break-all`}>{m.title}</div>
				     	  	    {/*{haveLabel ? <label className="font-semibold">Question</label>: <></>}*/}
				     	     	<div className={`text-sm p-1 mt-1  w-full break-all text-black whitespace-pre-wrap bg-${setInfoBackground}-100`}>{m.description.length <= 0 ? "No description !" : m.description }</div>    
				     	  	    {haveLabel ? <label className="font-semibold">Answer</label>: <></>}
				     	  	    {
				     	     	  haveAnswer ? <div className="text-sm p-1 mt-1  w-full break-all text-black whitespace-pre">{m.answer.length <= 0 ? "No answer yet !" : m.answer }</div>: <></> 	
				     	  	    }
					     	  	</div>
{/*----------------------------------------------------------edit--------------------------------------------*/}
				     	  	<div className={`${m.read ? "hidden":"block"} ${setHeight} mt-2`}>
				     	  	   {haveLabel ? <label className="font-semibold">Question</label>: <></>}
				     	  	   <input 
				     	  	         className="font-semibold mt-1 w-full p-1 text-sm bg-white"  
				     	  	         name="title" 
				     	  	         value={editInfo.title} 
				     	  	         onChange={editChangeHandle}
				     	  	   />
				     	  	   {haveLabel ? <label className="font-semibold">Description</label>: <></>}
				     	  	   <textarea 
				     	  	         className={`text-sm p-1 ${haveAnswer ?"h-[35%]" : "h-[80%]"} mt-1 text-gray-800 w-full`} 
				     	  	         name="description" 
				     	  	         value={editInfo.description} 
				     	  	         onChange={editChangeHandle}
				     	  	    />
				     	  	   {haveLabel ? <label className="font-semibold">Answer</label>: <></>}
				     	  	    {haveAnswer ?
				     	  	    <textarea 
				     	  	         className={`text-sm p-1 h-[35%] mt-1 text-gray-800 w-full`} 
				     	  	         name="answer" 
				     	  	         value={editInfo.answer} 
				     	  	         onChange={editChangeHandle}
				     	  	    />
				     	  	    :
				     	  	    <></>
				     	  	    }
				     	  	</div>
				     	</div>
			     	   )			     
			         }).reverse()
			     	
			
		)
}