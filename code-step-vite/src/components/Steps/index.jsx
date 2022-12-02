//step
import Step from './step'
import StepHandler from './stepHandler'

import {useState,useEffect} from 'react'
import uniqid from 'uniqid';




export default function Steps({
	                          step ,
	                          setStep,
			      	          stepSelect,
			      	          selectedStep,
			      	          setSelectedStep,
			      	          branchName
			      	      }){

	const [stepContext,setStepContext] = useState("") //5
	const [isContextEditing,setIsContextEditing] = useState(false) //6
	const [contextIndex,setContextIndex] = useState(null) //7

// -----------------add step-------------------------------------- //
	function addStep(){
		//selecting the last index
		editContext(step.length,"")
		//checking if it is a new context
		if(!isContextEditing){
	       setStep([...step,{id:uniqid(),context:"",branch:branchName}])
		}
	}

// -----------------edit step-------------------------------------- //


///getting the context value while typing in input 

    function stepContextChangeHandle(e){
	  setStepContext(e.target.value)
    }

/// setting which index to edit
	 function editContext(index,context){
		setIsContextEditing(!isContextEditing)
    	setContextIndex(index)
        setStepContext(context)    		
    }

///submiting context while Clicking enter
    function submitContext(e){
    	e.preventDefault()
    	editStep()
    }

///submiting context while Clicking edit button
	function editStep(){
		///checking if input is empty
		if(stepContext <= 0){
			alert("add some inputs")
			return;
		}

		setIsContextEditing(!isContextEditing)

		///mapping current context to edit
		const context = step.map((c,i)=>{
    		if(i === contextIndex){
    			return {...c,context:stepContext}
    		}else{
    			return {...c}
    		}
    	})
    	setStep(context)
        setStepContext("")    	
	}


// -----------------delete step-------------------------------------- //
	
///delete step
	function deleteStep(){	
	    ///deleting last index by filtering by index	
	    const del_step = step.filter((s,i)=> step.length-1 !== i )

	    setStep(del_step)

	    // if last index is selected at the same time deleting it
	    if(selectedStep === step.length-1 && selectedStep !==0){
	    	setSelectedStep(step.length-2)
	    } 

	}

	
	return (
		    <div className="flex flex-col h-[90vh] gap-1  text-white overflow-y-scroll ">	
			      	    <Step 
			      	          step={step} 
			      	          stepSelect={stepSelect}
			      	          selectedStep={selectedStep}
			      	          stepContext={stepContext}
			      	          stepContextChangeHandle={stepContextChangeHandle}
			      	          submitContext={submitContext}
			      	          isContextEditing={isContextEditing}
			      	          editContext={editContext}
			      	          contextIndex={contextIndex}
			      	          branchName={branchName}

			      	    />

			      	 	{/*<StepHandler 
			      	 	      addStep={addStep} 
			      	 	      deleteStep={deleteStep}
			      	 	      editStep={editStep}
			      	          isContextEditing={isContextEditing}

			      	 	/>*/}
		    </div>
		)
}