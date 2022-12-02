import {useState} from 'react'
import {ImFolder} from 'react-icons/im'
import {ImFolderOpen} from 'react-icons/im'
import {DiCodeBadge} from 'react-icons/di'




export default function Explore({exploreData,getContent}){

  const [expand,setExpand] = useState(false)
  function expandFolder(){
    setExpand(!expand)
  }
  return(
    <>
      {
        exploreData.info[0].type === "blob" ? 
        <div className="cursor-pointer flex items-center gap-1" onClick={()=>getContent(exploreData.info[0].url,exploreData.info[0].path)}><DiCodeBadge/>{exploreData.key}</div> :
        <div className="cursor-pointer flex items-center gap-1" onClick={expandFolder}>{expand ? <ImFolderOpen/>:<ImFolder/>}{exploreData.key}</div> 

      }


      <div className={`pl-2 ${expand ? "block":"hidden"}`}>
        {
        exploreData.children && exploreData.children.map((m,i)=>{
          return (
            <Explore key={i} exploreData={m} getContent={getContent}/>
          )
        })
      }
      </div>
      
    </>
  )
}