import {BsFilterSquareFill} from 'react-icons/bs'
import {MdOutlineQuestionAnswer} from 'react-icons/md'
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare} from 'react-icons/ai'
import {MdDescription} from 'react-icons/md'
import {useState} from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin4Line} from 'react-icons/ri'


export default function QuestionComponent(){

	    const [isAnswering,setIsAnswering] = useState(false)
	    const [isEditing,setIsEditing] = useState(false)
	    const [expand,setExpand] = useState(true)


	    function expandAddQuestion(){
	    	setExpand(!expand)
	    }
	    function addAnswer(){
	    	setIsAnswering(!isAnswering)
	    }

	    function editQuestion(){
	    	setIsEditing(!isEditing)
	    }
	    function deleteQuestion(){

	    }

		return (
			  <div className="p-2 w-full bg-gray-200 overflow-auto">
			  	  <div className="mx-auto w-full">

			  	      <div className="w-full flex flex-col gap-2 p-2">
			  	           <div className="font-semibold cursor-pointer justify-center bg-blue-500 p-2 text-white text-center flex items-center gap-2"  onClick={expandAddQuestion}>Add questions<span className={`${!expand?"-rotate-180":""} transition-all text-2xl`}>{expand?<AiFillPlusSquare/>:<AiFillMinusSquare/>}</span></div>
			  	           <div className={`${expand ?"block" :"hidden"}`}>
			  	           <div className="flex flex-col gap-2">
			  	             <input className="bg-white p-2 w-full h-[50px]" placeholder="title" />
			  	             <textarea className="bg-white p-2 w-full h-[200px]" placeholder="question"></textarea>
			  	             <div><button className="bg-blue-500 p-2 text-white">Add Question</button></div>
			  	           </div>
			  	           </div>
			  	      </div>


			  	     <div>
			  	     	<div className="flex w-full p-2 justify-end mt-2 items-center gap-2 cursor-pointer border-t border-black">
			  	     	  <select className="p-2">
			  	     	  	<option>Solved</option>
			  	     	  	<option>Unsolved</option>
			  	     	  </select>
			  	     	  {/*<BsFilterSquareFill/>
			  	     	    filter*/}
			  	     	  </div>
			  	     </div>

{/*--------------------------------------question/answers-------------------------------------*/}
			  	     <div className="p-2 mt-2 flex gap-2 flex-col w-full">
			  	     	    <div className="flex justify-between">
			  	     	       <div className="font-semibold flex items-center gap-2">
			  	     	         <input type="checkbox" className=""/>
			  	     	         <label className="bg-red-500 px-2 text-white text-sm">Unsolved</label>
			  	     	       </div>
			  	     	       <div className="hidden md:block">
			  	     	       <div className="flex gap-5">
			  	     	          <h1 className="font-semibold cursor-pointer flex items-center" onClick={editQuestion}><BiEditAlt/>Edit</h1>
			  	     	          <h1 className="font-semibold cursor-pointer flex items-center" onClick={deleteQuestion}><RiDeleteBin4Line/>Delete</h1>
			  	     	          <h1 className="font-semibold cursor-pointer flex items-center" onClick={addAnswer}><MdOutlineQuestionAnswer/>Answer</h1>
			  	     	       </div>
			  	     	       </div>
			  	     	    </div>
			  	     	    <div><h1 className="font-semibold">Question Name</h1></div>

			  	     	    <div className=" flex flex-col gap-2 min-h-10 bg-white">
			  	     	       <div className="w-full flex flex-col">

			  	     	        <span className={`${!isEditing ? "block": "hidden"} bg-gray-100 p-2 text-sm`}>
			  	     	           Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug. Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM. Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.
			  	     	        </span>

			  	     	        <textarea className={`${isEditing ? "block": "hidden"} p-2 h-40`} />
			  	     	       </div>
			  	            </div>  
			  	            <div className={`${isEditing ? "block" : "hidden"}`}>
			  	     	          <button className="bg-blue-500 px-2 text-white">Edit</button>
			  	     	    </div>
			  	     	    	
			  	     	    <div><h1 className="font-semibold">Answer</h1></div> 	
			  	         	<div className=" flex flex-col gap-2 bg-white min-h-10  ">
			  	     	       <div className="w-full flex flex-col">

			  	     	        <span className={`${!isAnswering ? "block": "hidden"} p-2 font`}>
			  	     	           No answer yet
			  	     	        </span>

			  	     	        <textarea className={`${isAnswering ? "block": "hidden"} p-2 h-40`} />
			  	     	       </div>
			  	            </div>  
			  	            <div className={`${isAnswering ? "block" : "hidden"}`}>
			  	     	          <button className="bg-blue-500 px-2 text-white">save</button>
			  	     	    </div>
			  	     </div>
{/*--------------------------------------question/answers-------------------------------------*/}
			  	  </div>
			  </div>
			)
	} 