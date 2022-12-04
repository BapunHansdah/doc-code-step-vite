export default function Branch({branch,branchSelect,branchChangeHandle}){
	return(
		  <div className="border mb-2">
		             	<select type="option"  onChange={branchChangeHandle} className="w-full p-2 text-black" placeholder="hello" >
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
                     