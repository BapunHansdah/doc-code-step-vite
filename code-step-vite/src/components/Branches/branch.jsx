export default function Branch({branch,branchSelect,branchChangeHandle,loading}){
   
	if(loading) {
		return <div className="text-center">loading...</div>
	}
	return(
		  <div className="border mb-2">
		             	<select type="option"  onChange={branchChangeHandle} className="w-full  font-bold p-2 text-black" >
							      	          <option className="bg-white text-black" value={""}>Select Branch</option>

						  {
						  	branch.map((b,i)=>{
				                 return (
							      	    	  <option key={i} className="bg-white text-black" value={b.name}>{b.name}</option>
				                 	)
						  	})
						  }
		      	        </select>
		 </div>
		)
}
                     