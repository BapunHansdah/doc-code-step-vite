export default function Step({
	                         step,
	                         stepSelect,
	                         selectedStep,
	                         stepContextChangeHandle,
	                         contextIndex,
	                         submitContext,
	                         stepContext,
	                         isContextEditing,
	                         editContext}){

	return(
		 <div className="flex flex-col gap-1">
		    {
		    step.map((s,i)=>{
		          return (
		          	   	<div key={s.id}>
		                 {
		                  isContextEditing && i === contextIndex ? <form onSubmit={submitContext}>
		                                      <input className="p-2 text-black w-full" name="context" value={stepContext} onChange={stepContextChangeHandle} required={true} />
	                                         </form> 
	                                       :
	                                         <div  
	                                               onClick={()=>stepSelect(i)} 
	                                               onDoubleClick={()=>editContext(i,s.context)}
	                                               className={`flex justify-between shadow border hover:border-blue-500 ${i === selectedStep ? "bg-blue-500 text-white hover:scale-95":"bg-white text-black"} transition-all p-2 hover:bg-opacity-90 cursor-pointer`}>
	                                               {i === selectedStep ? s.context : s.context.length >=10 ? s.context.slice(0,10)+"..." : s.context} 
	                                               
	                                         </div>
		                  }
		                </div>
		            ) 
		      })	
		    }
	    </div>
	    )
}