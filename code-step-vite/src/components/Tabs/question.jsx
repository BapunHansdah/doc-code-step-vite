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



export default function QuestionComponent(){

	    const [isAnswering,setIsAnswering] = useState(false)
	    const [isEditing,setIsEditing] = useState(false)
	    const [expand,setExpand] = useState(true)

	    const [ QuestionInfo,setQuestionInfo] = useState({title:"",description:"",answer:""})
	    const [ questions , setQuestions ] = useState(()=>{
	    	const questionObj = JSON.parse(localStorage.getItem('question')) || []
            return questionObj 
	    })
	    const [ taskTab,setTaskTab ] = useState(0)



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

	    function addQuestionSubmit(e){
	    	e.preventDefault()
	    	// console.log(e.target)
	    	if(QuestionInfo.title.length <= 0 ){
	    		alert("input field cant be empty")
	    		return;
	    	}
	    	setQuestions([...questions,{id:uniqid(),...QuestionInfo,answer:"",status:[1,0],read:true}])
	    	setQuestionInfo({title:"",description:"",answer:""})
	    }

	    function changeHandle(e){
	    	setQuestionInfo({...QuestionInfo,[e.target.name]:e.target.value})
	    }

	    function selectOption(e){

	    	setTaskTab(parseInt(e.target.value))

	    }

	    useEffect(()=>{
           // console.log("saved to localStorage")
           localStorage.setItem('question',JSON.stringify(questions))       
         },[questions])


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