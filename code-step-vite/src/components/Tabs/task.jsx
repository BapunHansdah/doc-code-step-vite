import {useState,useEffect} from 'react'
import {AiFillCheckSquare} from 'react-icons/ai'
import {BsBorderAll} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin4Line} from 'react-icons/ri'


export default function TaskComponent({data}){

		return (
			  <div className="w-full bg-gray-100 flex flex-col items-center p-2">
			     <div className="max-w-md flex flex-col md:flex-row gap-2 mt-2 w-full">
			         <input className="w-full md:w-8/12 p-2 bg-white" placeholder="add task" />
			         <button className="w-full md:w-4/12 p-2 bg-blue-400 text-white">add Task</button>
			     </div>
			     <div className="max-w-md grid grid-cols-4 gap-1 w-full mt-2 cursor-pointer">
			         <div className="w-full p-1 flex justify-center items-center bg-blue-900 text-white text-center cursor-pointer border-white border-dotted border-2"><BsBorderAll/></div>
			         <div className="w-full p-1 flex justify-center items-center bg-red-400 text-white text-center cursor-pointer "><AiFillCheckSquare/></div>
			         <div className="w-full p-1 flex justify-center items-center bg-orange-400 text-white text-center cursor-pointer "><AiFillCheckSquare/></div>
			         <div className="w-full p-1 flex justify-center items-center bg-green-400 text-white text-center cursor-pointer "><AiFillCheckSquare/></div>
			     </div>

			     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full mt-5 overflow-y-auto">
			     	  <div className="bg-red-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-red-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>


			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>

			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>

			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>

			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>

			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>


			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>

			     	  <div className="bg-green-300 w-full h-48 p-2">
			     	    <div className="flex justify-between gap-2">
			     	      <div className="flex gap-2">
			     	         <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-white cursor-pointer" name="status"><AiFillCheckSquare/></div>
							 <div  className="bg-white text-green-500 cursor-pointer" name="status"><AiFillCheckSquare/></div>
			     	      </div>
			     	       <div className="flex gap-2">
			     	         <span className="cursor-pointer text-black"><BiEditAlt/></span>
			     	         <span className="cursor-pointer text-black"><RiDeleteBin4Line/></span>
			     	       </div>
			     	    </div>
			     	  	<h1 className="font-semibold mt-1">Task</h1>
			     	  	<p className="text-sm h-32 bg-white overflow-auto p-2 mt-1 text-gray-800">Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
			     	  </div>
			     </div>
			  </div>
			)
	}