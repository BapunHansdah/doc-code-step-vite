import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare} from 'react-icons/ai'
import {useState,useEffect} from 'react'


export default function Form({taskInfo,addTaskSubmit,changeHandle,formName}){

    const [ expand,setExpand] = useState(false)


    function expandAdd(){
	    setExpand(!expand)
	}




        

	return(
		   <div className="w-full flex flex-col gap-2 p-2">
  	           <div className="font-semibold cursor-pointer justify-center bg-blue-500 p-2 text-white text-center flex items-center gap-2"  onClick={expandAdd}>Add {formName}<span className={`${!expand?"-rotate-180":""} transition-all text-2xl`}>{!expand?<AiFillPlusSquare/>:<AiFillMinusSquare/>}</span></div>
  	           <div className={`${expand ?"block" :"hidden"}`}>
  	           <form onSubmit={addTaskSubmit} className="flex flex-col gap-2">
  	             <input className="bg-white p-2 w-full h-[50px]" name="title" placeholder="title"  value={taskInfo.title}  onChange={changeHandle}/>
  	             <textarea className="bg-white p-2 w-full h-[200px]" name="description" placeholder="question" value={taskInfo.description} onChange={changeHandle}></textarea>
  	             <div><button className="bg-blue-500 p-2 text-white">Add {formName}</button></div>
  	           </form>
  	           </div>
			</div>
		)
}