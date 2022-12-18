import {BsFilterSquareFill} from 'react-icons/bs'
import {MdOutlineQuestionAnswer} from 'react-icons/md'
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiFillMinusSquare} from 'react-icons/ai'
import {MdDescription} from 'react-icons/md'
import {useState,useEffect} from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin4Line} from 'react-icons/ri'
import Form from '../utils/Form'
import uniqid from 'uniqid';
import InfoCard from '../utils/infoCard'
import useAuth from '../useAuth'
import axios from 'axios'



export default function QuestionComponent(){

	    const [isAnswering,setIsAnswering] = useState(false)
	    const [isEditing,setIsEditing] = useState(false)
	    const [expand,setExpand] = useState(true)

	    const [ QuestionInfo,setQuestionInfo] = useState({title:"",description:"",answer:""})
	    const [ questions , setQuestions ] = useState([])
	    const [ taskTab,setTaskTab ] = useState(0)

	    const {auth} = useAuth()



	    async function getAllQuestions(){
             // console.log("hello")
	    	   try{
	    	   	if(auth.token){
	    	   	 await axios.get("/api/question/",{
		 	   		'headers': {
				                  'Authorization': (auth.token ? auth.token : "")    
				        }
				     }).then(res=>{
		 	   		    // console.log(res.data)
		 	   		    setQuestions(res.data)
		 	          })
		     }

	    	   }catch(err){

	    	   	console.log(err)
	    	   }
	    }




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

	   async function addQuestionSubmit(e){
	    	e.preventDefault()
	    	// console.log(e.target)
	    	if(QuestionInfo.title.length <= 0 ){
	    		alert("input field cant be empty")
	    		return;
	    	}

	    	try{
           if(auth.token){
		 	await axios.post("/api/question/",QuestionInfo,{
		 	   		'headers': {
				                  'Authorization': (auth.token ? auth.token : "")    
				        }
				     }).then(res=>{
				      console.log(res.data)
				     	setQuestions([...questions,{...res.data,answer:""}])
				     })
		 	}
		 	
	           
	       	// setTasks([...tasks,{id:uniqid(),...taskInfo,status:[1,0,0],read:true}])
	        setQuestionInfo({title:"",description:"",answer:""})
	    	}catch(err){
	    		console.log(err)
	    	}

	    	// setQuestions([...questions,{id:uniqid(),...QuestionInfo,answer:"",status:[1,0],read:true}])
	    }

	    function changeHandle(e){
	    	setQuestionInfo({...QuestionInfo,[e.target.name]:e.target.value})
	    }

	    function selectOption(e){

	    	setTaskTab(parseInt(e.target.value))

	    }


	    async function deleteAllTasks(){
	    	try{
           	// console.log(auth.token)
	    		
           await axios.delete(`api/question/deleteall`,{
					        'headers': {
					            'Authorization': (auth.token ? auth.token : "")    
					        }
					     })
	    	 setQuestions([])

	    	}catch(err){
	    		console.log(err)
	    	}

	    }

	    useEffect(()=>{
	    	getAllQuestions()     
         },[auth.token])

          
         console.log(questions)

        


        const options= [{name:"All"},{name:"Unsolved"},{name:"Solved"}]
		return (
			  <div className="p-2 w-full bg-gray-100 overflow-auto">
			  	  <div className="mx-auto w-full">

			  	     <Form 
			  	         taskInfo={QuestionInfo} 
			  	         addTaskSubmit={addQuestionSubmit} 
			  	         changeHandle={changeHandle}
                         formName={"Question"}
			  	     />

			  	     <div className="flex justify-end px-2 w-full">
			           <button onClick={deleteAllTasks} className=" bg-red-500 px-2 text-white">Delete All Questions</button>
                     </div>

			  	     <div>
			  	     	<div className="flex w-full p-2 justify-end mt-2 items-center gap-2 cursor-pointer">
			  	     	  <select className="bg-white border border-black" onChange={selectOption}>

			  	     	  {
			  	     	  	options.map((o,i)=>{
			  	     	  	  return <option key={i} value={i}>{o.name}</option> 
			  	     	  	})
			  	     	  }
			  	     	  </select>
			  	     	  </div>
			  	     </div>

{/*--------------------------------------question/answers-------------------------------------*/}

                   
		         <div className="grid gap-5 w-full mt-5 overflow-y-auto">    
			  	    <InfoCard 
				        infoName={"question"}
				        tasks={questions} 
				        setTasks={setQuestions} 
				        taskTab={taskTab} 
				        setDynamicBackgroundColor={false}
				        setHeight={"h-96"}
				        haveIconName={true}
				        haveAnswer={true}
				        haveLabel={true}
				        setInfoBackground={"gray"}
				     />
				 </div>
{/*--------------------------------------question/answers-------------------------------------*/}
			  	  </div>
			  </div>
			)
	} 