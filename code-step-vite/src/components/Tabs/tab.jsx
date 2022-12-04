import TabArr from './registerTab'
export default function Tabs({tabSelect,selectedTab,issues}){

	return(
		  <>
		  {
		  	TabArr.map((t,i)=>{
                 return <div key={i} onClick={()=>tabSelect(i)} className={`border w-full flex justify-center border gap-2 hover:border-blue-500 transition-all items-center  font-semibold cursor-pointer shadow ${selectedTab===i ? "bg-blue-500 text-white hover:scale-95": "bg-white text-black"} hover:bg-opacity-80`} >{t.name} {i===3?<span className="bg-red-500 rounded-full text-white h-5 w-5 flex items-center justify-center">{issues.length}</span>:<></>}</div>
		  	})
		  }
		 </>
		)
}