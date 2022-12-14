import {useState,useEffect} from 'react'
import uniqid from 'uniqid';
import axios from 'axios'
import {TfiLayoutMenuV} from 'react-icons/tfi'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'

///tabs
import  Tabs from './Tabs/tab'
import  Bug from './Tabs/bug'
import  File from './Tabs/file'
import  Note from './Tabs/note'
import  Question from './Tabs/question'
import  Task from './Tabs/task'

//step
import Steps from './Steps/index'

//branch 
import Branch from './Branches/branch'





export default function Main() {
	// const [projects,setProjects] = useState(()=>{
	// 	return JSON.parse(localStorage.getItem('project')) || []
	// })
	const [userInfo,setUserInfo] =useState(()=>{
		return JSON.parse(localStorage.getItem('info')) || {name:"BapunHansdah",token:"",repo:"doc-code-step-vite"}
	})
	
	const [branch,setBranch] = useState([])
	const [step,setStep] = useState([]) //1
	const [selectedStep,setSelectedStep] = useState(null) //2
	const [selectedTab,setSelectedTab] = useState(0) //3
	const [toggleSideBar,setToggleSideBar] = useState(true) //4
	const [branchName,setBranchName] = useState("")
	const [issues,setIssues] = useState([])
	const [projectId,setProjectId] = useState(null)
  const [commitloading,setcommitloading] = useState(false)
  const [branchloading,setbranchloading] = useState(false)



    //step controller

    const [file, setFile] = useState([])
    const [commitUrl,setCommitUrl] = useState("")
    const [content,setContent] = useState("")
    const [path,setPath] =useState("")

    const [errMsg,setErrMsg] = useState("")
    // const [githubuserInfo.token,setGitHubuserInfo.token] = useState("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")

    const navigate = useNavigate()

///select current Step
	function stepSelect(stepIndex,url){
        getTree(url)
		// setExpand(!expand)
		setSelectedStep(stepIndex)
	}
///select current Tab
	function tabSelect(tabIndex){
		setSelectedTab(tabIndex)

	}
///select current Tab
	function tabChangeHandle(e){
		setSelectedTab(parseInt(e.target.value))
	}
///open side bar
	function openSideBar(){
		setToggleSideBar(!toggleSideBar)
	}

//selrct branch
    function branchChangeHandle(e){
        getCommits(e.target.value)
        setStep([])
        setFile([])
        setSelectedStep(null)
        setContent("")
    }

	useEffect(()=>{
          getBranchs()
          getIssues()
	},[])


    ///function to get branches from api
	function getBranchs() {
		setbranchloading(true)
    axios.get(`https://api.github.com/repos/${userInfo.name}/${userInfo.repo}/branches`,{
    	'headers': {
                  'Authorization': (userInfo.token ? `token ${userInfo.token}` : "") 
        }
		    }).then((res) => {
		      // console.log(res.data)

		       setBranch(res.data)
		       setbranchloading(false)

		    }).catch((err)=>{

		          setErrMsg(err.response.data.message || err.message)
		          alert(err.response.data.message || err.message)
		          setbranchloading(false)
		 
		       return navigate('/error')
	 	     })
  }

  //function to set Current branch commit
  function getCommits(name) {
  	setcommitloading(true)
    axios.get(`https://api.github.com/repos/${userInfo.name}/${userInfo.repo}/commits?sha=${name}`,{
    	'headers': {
                  'Authorization': (userInfo.token ? `token ${userInfo.token}` : "") 
            } 
            }).then((res) => {
            	  // console.log(res)
                setStep(res.data)
                setcommitloading(false)
             }).catch((err)=>{
             	console.log(err)
             	setcommitloading(false)
             	setErrMsg(err.response.data.message)
             	alert(err.response.data.message)
	 	     })
  }
  //function to get explorer
  function getTree(commitUrl) {
    axios.get(`${commitUrl}?recursive=1`,{
    	'headers': {
                  'Authorization': (userInfo.token ? `token ${userInfo.token}` : "") 
            } 
        }).then((res) => {
            setFile(res.data.tree)
        }).catch((err)=>{
        	   setErrMsg(err.response.data.message)
        	   alert(err.response.data.message)
	 	})
  }


function getContent(url,path){
	setPath(path)
    axios.get(url,{
    	'headers': {
                  'Authorization': (userInfo.token ? `token ${userInfo.token}` : "") 
         }
        }).then((res)=>{
              setContent(atob(res.data.content))
        }).catch((err)=>{
        	   setErrMsg(err.response.data.message)
        	   alert(err.response.data.message)
	 	})
  }

    /// function to nest tree data of github
    function to_tree(d) {
		  var new_d = {}
		  for (var i of d) {
		    var k = i._path.shift()
		    if (!(k in new_d)) {
		      new_d[k] = []
		    }
		    new_d[k].push(i)
		  }
		  return Object.keys(new_d).map(function(x) {
		    var _pl = { 0: [], 1: [] }
		    for (var i of new_d[x]) {
		      _pl[i._path.length > 0 ? 1 : 0].push(i)
		    }
		    return {
		      key: x,children:to_tree(_pl[1]), info:{..._pl[0]}
		    }
		  });		
     }
     
     var new_data = file.map(function(x) { return { ...x, '_path': JSON.parse(JSON.stringify(x.path.split('/'))) } })
     const root = {key:userInfo.repo,children: to_tree(new_data),info:{"0":{url:""}}}


     function getJSON(){
		axios.get("").then((res)=>{
			// console.log(res)
		})
	}

      ///function to get branches from api
	function getIssues() {
       axios.get(`https://api.github.com/repos/${userInfo.name}/${userInfo.repo}/issues`,{
    	  'headers': {
                  'Authorization': (userInfo.token ? `token ${userInfo.token}` : "") 
            }
		    }).then((res) => {
		       setIssues(res.data)
		    }).catch((err)=>{
		       setErrMsg(err.response.data.message)
		       alert(err.response.data.message)
	 	     })
     }

	
	//function to logout
	 function newProject(){
	 	localStorage.removeItem('info')
	 	localStorage.removeItem('note')
	 	localStorage.removeItem('task')
	 	localStorage.removeItem('question')
	 	return navigate('/')
	 } 
   


	return(
		   <div className="p-2 relative">
{/*----------------------------------------------header-----------------------------------------------------------------*/}

		   <div className="p-4 border text-blue-500 bg-white flex justify-between shadow-xl">
		   	  <div className="font-bold">
		   	    <div onClick={openSideBar} className="cursor-pointer flex item-center"><TfiLayoutMenuV size={20}/></div>
		   	  </div>
		   	  <div className="font-bold uppercase text-center">{userInfo.repo}</div>
		   	  <div className="flex gap-5">
		   	    <div onClick={newProject} className="font-bold cursor-pointer">New</div>
		   	  </div>
		   </div>
		   <div className="flex gap-1 mt-2">

{/*----------------------------------------------steps-----------------------------------------------------------------*/}

           {/*for device more than larger screen*/}

		   <div className={`${toggleSideBar ? "hidden lg:block lg:w-2/12":"hidden"} bg-white`}>
	                  <Branch
	                          branch={branch}
	                          branchChangeHandle={branchChangeHandle} 
	                          loading={branchloading}  
			              />
                  <div className="flex flex-col h-[530px] gap-1 text-white overflow-y-scroll">	
			      	    <Steps 
			      	          step={step} 
			      	          setStep={setStep}
			      	          branchName={branchName}
			      	          stepSelect={stepSelect}
			      	          loading={commitloading}
			      	          selectedStep={selectedStep}
			      	          setSelectedStep={setSelectedStep}
			      	    />
			      	 </div>
	        </div>

           {/*for device less than larger screen*/}

		   <div className={`${toggleSideBar ? "block lg:hidden lg:w-2/12":"hidden"}  z-10 w-1/2 bg-white absolute shadow-2xl`}>
		              <Branch
	                          branch={branch}
	                          branchChangeHandle={branchChangeHandle}  
	                          loading={branchloading}  
			          />
			          <div className="overflow-y-scroll h-[530px]">
		              <Steps 
			      	          step={step}
			      	          setStep={setStep} 
			      	          branchName={branchName}
			      	          stepSelect={stepSelect}
			      	          loading={commitloading}
			      	          selectedStep={selectedStep}
			      	          setSelectedStep={setSelectedStep}
			      	    />
			      	   </div>
	      	           
			 </div>
{/*----------------------------------------------tabs-----------------------------------------------------------------*/}

	      	<div className={`${toggleSideBar ? "w-full lg:w-10/12 transition-all":"w-full"}`}>
		      <div className="flex flex-col gap-1 ">

           {/*for device more than larger screen*/}

		      	 <div className="w-full hidden md:block">
		      	   <div className="flex h-10 justify-around">
			      	    <Tabs 
			      	       tabSelect={tabSelect}
			      	       selectedTab={selectedTab}
			      	       issues={issues}
			      	    />
		      	    </div>
		      	 </div>

           {/*for device less than larger screen*/}

		      	 <div className="w-full bg-white block  md:hidden  shadow-2xl relative">
		      	   <div className="flex justify-center w-full">
		      	    <div className="flex h-10 fixed bottom-0 w-full mx-auto max-w-full px-2 z-10">
		      	    	{/*<TabsMobile 
		      	    	  tabChangeHandle={tabChangeHandle}
		      	    	  issues={issues}
		      	    	/>*/}
		      	    	<Tabs 
			      	       tabSelect={tabSelect}
			      	       selectedTab={selectedTab}
			      	       issues={issues}
			      	    />
		      	    </div>
		      	    </div>
		      	 </div>

{/*----------------------------------------------contents-----------------------------------------------------------------*/}

		      	 <div className="w-full h-[90vh] bg-white flex  shadow-2xl shadow">
		      	 	{
		      	 	  selectedTab===0 ? <File root={root} getContent={getContent} content={content} path={path}/> : 
		      	 	  selectedTab===1 ? <Task/> : 
		      	 	  selectedTab===2 ? <Note/> : 
		      	 	  selectedTab===3 ? <Bug issues={issues}/>  :
		      	 	  <Question/> 
		      	 	}
		      	 </div>

		      </div>
		      </div>
		   </div>
		      <div className="h-10"></div>
		   </div>
		)
}