export default function({addStep,deleteStep,isContextEditing,editStep}){
	return(
		   <form  className="flex gap-1">
		      	 	   <div onClick={!isContextEditing ?addStep : editStep} className="w-full text-center cursor-pointer hover:bg-opacity-80 bg-green-400 p-1 rounded-2xl">{!isContextEditing ? "Add" : "Edit"}</div>
		      	 	   <div onClick={deleteStep} className="w-full text-center cursor-pointer hover:bg-opacity-80 bg-red-400 p-1 rounded-2xl">Delete</div>
		   </form>
		)
}