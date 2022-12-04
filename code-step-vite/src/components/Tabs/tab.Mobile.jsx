import TabArr from './registerTab'
export default function TabsMobile({tabChangeHandle,issues}){

	return(
		  <>
           <select type="option"  onChange={tabChangeHandle} className="w-full p-2"  >

		  {
		  	TabArr.map((t,i)=>{
                 return (
			      	    	  <option className="" key={i} value={i}>{i===3?issues.length : "" }&nbsp;{t.name}</option>
                 	)
		  	})
		  }
		      	</select>

		 </>
		)
}