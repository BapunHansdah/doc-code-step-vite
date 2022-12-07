import TabArr from './registerTab'
import {MdDescription} from 'react-icons/md'

export default function Tabs({tabSelect,selectedTab,issues}){

	return(
		  <>
		  {
		  	TabArr.map((t,i)=>{

                 return (
                 	   <div key={i} className="w-full h-full">
	                 	   <div className="block md:hidden w-full h-full">
	                 	      <div className="flex bg-white w-full h-full">
	                             <div  onClick={()=>tabSelect(i)} className={`border w-full flex justify-center border gap-2 hover:border-blue-500 transition-all items-center  font-semibold cursor-pointer shadow ${selectedTab===i ? "bg-blue-500 text-white hover:scale-95": "bg-white text-black"} hover:bg-opacity-80`} >{t.icon}{i===3?<span className="bg-red-500 rounded-full text-xs text-white p-1">{issues.length}</span>:<></>}</div>
	                 	      </div>
	                 	   </div>
	                 	   <div className="hidden md:block w-full h-full">
	                 	      <div className="flex bg-white w-full h-full">
	                             <div  onClick={()=>tabSelect(i)} className={`border w-full flex justify-center border gap-2 hover:border-blue-500 transition-all items-center  font-semibold cursor-pointer shadow ${selectedTab===i ? "bg-blue-500 text-white hover:scale-95": "bg-white text-black"} hover:bg-opacity-80`} >{t.name} {i===3?<span className="bg-red-500 rounded-full text-xs text-white p-1">{issues.length}</span>:<></>}</div>
	                 	      </div>
	                 	   </div>
                 	   </div>
                 	)
		  	})
		  }
		 </>
		)
}