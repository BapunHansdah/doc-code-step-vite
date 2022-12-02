import Explore from './Explorer/explore'
import axios from 'axios'
import {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";

export default function FileComponent({root,getContent,content,path}){

      const [exploreBlock,setExploreBlock] = useState(true)
      
      function toggleBlock(block){
      	if(block==="explore"){
      	 setExploreBlock(true)
      	}else{
      	 setExploreBlock(false)
      	}
      }

  // console.log(content)
// `/${path.length >=10  ? '...' + path.substring(path.length,10)  : path}`
		return (
			  <div className="w-full">
			     <div className="w-full grid-cols-2 justify-between flex px-2">
			        <div onClick={()=>toggleBlock("explore")}className="font-semibold w-full md:w-5/12  md:overflow-auto bg-red-400 p-1 text-center break-all text-sm flex flex-wrap text-white">Explorer</div>
			        <div onClick={()=>toggleBlock("code")}className="font-semibold w-full bg-orange-400 p-1  text-center text-sm text-white break-all">{path}</div>
			     </div>
			  <div className="w-full flex items-center px-2">

			     <div className="flex w-full grid-cols-2 justify-between">
			         <div className={`w-full md:w-5/12  overflow-auto ${exploreBlock? "block md:block" : "hidden md:block"}`}>
			             <div className="text-sm h-[500px] bg-red-100 border-r border-red-400 overflow-scroll p-2">
			             	  <Explore exploreData={root} getContent={getContent}/>
			             </div>
			         </div>
			  	     <div className={`w-full overflow-auto ${exploreBlock? "hidden md:block" : "block md:block"}`}>
			  	          <div className="h-[500px] bg-orange-100 border-l border-orange-400">
			  	          	 	<AceEditor
								    mode="javascript"
								    theme="chaos"
								    value={content}
								    name="UNIQUE_ID_OF_DIV"
								    readOnly={true}
								    style={{width:'100%'}}
								    wrapEnabled={true}
								    editorProps={{ $blockScrolling: false }}
                                />
			  	          </div>
			  	     </div>
			     </div>
			  </div>
			  </div>
			)
	}