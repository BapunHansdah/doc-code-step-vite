import TabArr from './registerTab'
export default function TabsMobile({tabChangeHandle}){

	return(
		  <>
           <select type="option"  onChange={tabChangeHandle} className="w-full p-4 " placeholder="hello" >

		  {
		  	TabArr.map((t,i)=>{
                 return (
			      	    	  <option key={i} value={i}>{t.name}</option>
                 	)
		  	})
		  }
		      	</select>

		 </>
		)
}