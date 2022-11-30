import TabArr from './registerTab'
export default function Tabs({tabSelect,selectedTab}){

	return(
		  <>
		  {
		  	TabArr.map((t,i)=>{
                 return <div key={i} onClick={()=>tabSelect(i)} className={`border w-full flex justify-center border hover:border-blue-500 transition-all items-center text-xl font-semibold cursor-pointer shadow ${selectedTab===i ? "bg-blue-500 text-white hover:scale-95": "bg-white text-black"} hover:bg-opacity-80`} >{t.name}</div>
		  	})
		  }
		 </>
		)
}