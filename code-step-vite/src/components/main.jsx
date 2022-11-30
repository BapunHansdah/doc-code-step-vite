import {Data} from './Data'
import {useState,useEffect} from 'react'
import uniqid from 'uniqid';


///tabs
import  Tabs from './Tabs/tab'
import  TabsMobile from './Tabs/tab.Mobile'


import  Bug from './Tabs/bug'
import  File from './Tabs/file'
import  Note from './Tabs/note'
import  Question from './Tabs/question'
import  Task from './Tabs/task'

//step
import Steps from './Steps/index'







export default function Main() {
	const [step,setStep] = useState([]) //1
	const [selectedStep,setSelectedStep] = useState(0) //2
	const [selectedTab,setSelectedTab] = useState(0) //3
	const [toggleSideBar,setToggleSideBar] = useState(true) //4
    //step controller


///select current Step
	function stepSelect(stepIndex){
		// setExpand(!expand)
		setSelectedStep(stepIndex)
	}
///select current Tab
	function tabSelect(tabIndex){
		setSelectedTab(tabIndex)

	}
///select current Tab
	function tabChangeHandle(tabIndex){
		setSelectedTab(parseInt(tabIndex.target.value))
	}
///open side bar
	function openSideBar(){
		setToggleSideBar(!toggleSideBar)
	}

	useEffect(()=>{

	},[step])

	
	
	return(
		   <div className="p-2 relative">
{/*----------------------------------------------header-----------------------------------------------------------------*/}

		   <div className="p-4 border text-blue-500 bg-white flex justify-between shadow-xl">
		   	  <div className="font-bold">
		   	  	logo
		   	  </div>
		   	  <div className="flex gap-2">
		   	    <div className="cursor-pointer">888</div>
		   	    <div onClick={openSideBar} className="cursor-pointer">000</div>
		   	  </div>
		   </div>
		   <div className="flex h-[90vh] gap-1 mt-2">

{/*----------------------------------------------steps-----------------------------------------------------------------*/}

           {/*for device more than larger screen*/}

		   <div className={`${toggleSideBar ? "hidden lg:block lg:w-2/12":"hidden"}`}>
			      	 <div className=" flex flex-col h-[90vh] gap-1 px-2 text-white overflow-y-scroll">	
			      	    <Steps 
			      	          step={step} 
			      	          setStep={setStep}
			      	          stepSelect={stepSelect}
			      	          selectedStep={selectedStep}
			      	          setSelectedStep={setSelectedStep}
			      	    />
			      	 </div>
	        </div>

           {/*for device less than larger screen*/}

		   <div className={`${toggleSideBar ? "block lg:hidden lg:w-2/12":"hidden"} z-10 w-1/2 bg-white absolute shadow-2xl`}>
		              <Steps 
			      	          step={step}
			      	          setStep={setStep} 
			      	          stepSelect={stepSelect}
			      	          selectedStep={selectedStep}
			      	          setSelectedStep={setSelectedStep}
			      	    />
	      	           
			 </div>
{/*----------------------------------------------tabs-----------------------------------------------------------------*/}

	      	<div className={`${toggleSideBar ? "w-full lg:w-10/12":"w-full"} transition-all`}>
		      <div className="flex flex-col gap-1 ">

           {/*for device more than larger screen*/}

		      	 <div className="w-full hidden h-[8vh] md:block">
		      	   <div className="flex h-full justify-around h-[8vh] gap-1">
			      	    <Tabs 
			      	       tabSelect={tabSelect}
			      	       selectedTab={selectedTab}
			      	    />
		      	    </div>
		      	 </div>

           {/*for device less than larger screen*/}

		      	 <div className="w-full bg-white block  md:hidden  shadow-2xl">
		      	    <div className="flex">
		      	    	<TabsMobile 
		      	    	  tabChangeHandle={tabChangeHandle}
		      	    	/>
		      	    </div>
		      	 </div>

{/*----------------------------------------------contents-----------------------------------------------------------------*/}

		      	 <div className="w-full h-[90vh] bg-white flex justify-center items-center  shadow-2xl shadow">
		      	 	{
		      	 	  selectedTab===0 ? <File/> : 
		      	 	  selectedTab===1 ? <Task/> : 
		      	 	  selectedTab===2 ? <Note/> : 
		      	 	  selectedTab===3 ? <Bug/>  :
		      	 	  <Question/> 
		      	 	}
		      	 </div>

		      </div>
		      </div>
		   </div>
		   </div>
		)
}