import {AiFillCheckSquare} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin4Line} from 'react-icons/ri'


export default function taskList({m,setCurrentStatus,taskTab}){
	return(
		  <div className={`${m.status.indexOf(1) === 0 ? "bg-red-400":  m.status.indexOf(1) === 1 ? "bg-orange-400" : "bg-green-400" } w-full h-48 p-2 shadow`}>
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
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">{m.title}</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">{m.description}</p>
		   </div>
		)
}
