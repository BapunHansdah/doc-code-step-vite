export default function Step({
	                         step,
	                         stepSelect,
	                         selectedStep,
	                         stepContextChangeHandle,
	                         contextIndex,
	                         submitContext,
	                         stepContext,
	                         isContextEditing,
	                         editContext,
	                         branchName,
	                         loading
	                     }){

	if(loading) {
		return <div className="text-center">loading...</div>
	}

	return(
		 <div className="flex flex-col">
		    {
		    step.map((s,i)=>{
		    	// if(s.branch === branchName){
		          return (

		          	   	<div key={i}>
		                 {
		                  isContextEditing && i === contextIndex ? <form onSubmit={submitContext}>
		                                      <input className="p-2 text-black w-full" name="context" value={stepContext} onChange={stepContextChangeHandle} required={true} />
	                                         </form> 
	                                       :
	                                         <div  
	                                               onClick={()=>stepSelect(i,s.commit.tree.url)} 
	                                               // onDoubleClick={()=>editContext(i,s.commit.message)}
	                                               className={`flex justify-between shadow border hover:border-blue-500 ${i === selectedStep ? "bg-blue-500 text-white hover:scale-95":"bg-white text-black"} transition-all p-2 hover:bg-opacity-90 cursor-pointer`}>
	                                               {i === selectedStep ? s.commit.message : s.commit.message.length >=10 ? s.commit.message.slice(0,10)+"..." : s.commit.message} 
	                                               
	                                         </div>
		                  }
		                </div>
		            ) 
		         // }
		      })	
		    }
	    </div>
	    )
}