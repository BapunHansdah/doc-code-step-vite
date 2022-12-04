export default function BugComponent({issues}){
	    console.log(issues)
		return (
			  <div className="flex gap-2 flex-col w-full bg-gray-100 p-2">
			  	{
			  		issues && issues.map((issue,i)=>{
			  			return (
			  				  <div key={i} className="bg-white w-full rounded  p-5">
			  				    <div className="flex gap-2 items-center justify-between">
			  				      <div className="flex items-center gap-5">
			  				         <span className={`${issue.status === "open" ? "bg-green-500" : "bg-red-500"} w-3 h-3 rounded-full`}></span>
			  				         <img className="w-10 object-cover rounded-full" src={issue.user.avatar_url}/>
			  				         <h1 className="text-lg text-black font-bold">{issue.title}</h1>
			  				      </div>
			  				      <div className="h-full">
			  				         <a href={issue.html_url}  target="_blank" className="bg-blue-500 font-bold text-white text-sm p-2 rounded">Check &gt;</a>
			  				      </div>
			  				    </div>
			  				  </div>
			  				)
			  		})
			  	}
			  </div>
			)
	}