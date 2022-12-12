import {useState,useEffect} from 'react'
import {RiEditBoxFill} from 'react-icons/ri'
import {RiBookReadFill} from 'react-icons/ri'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import {unified} from 'unified'
import remarkParse from 'remark-parse'

export default function NoteComponent({data}){
  const [showNote, setShowNote] = useState(false);
  const [notes,setNotes] = useState(()=>{
    const noteObj = JSON.parse(localStorage.getItem('note')) || ""
    return noteObj
  })  
  const [showtextEditor,setShowtextEditor] = useState(false) 

  function toggleNote(){
    setShowtextEditor(!showtextEditor)
  }

  function handleNoteInput(e){
      setNotes(e.target.value)
  }

  function save(){
    
  }

  useEffect(()=>{
     // console.log("saved to localStorage")
     localStorage.setItem('note',JSON.stringify(notes))       
  },[notes])

   




  



		return (
			  <div className={`${showNote ? 'hidden': 'block'} w-full h-full`}>
                  <div className="font-bold p-1 bg-blue-500 shadow border-r text-sm text-white flex justify-between">
                         <span>{!showtextEditor?"Notes":"Editor"}</span>
                         <span className="px-1 bg-red-500 text-white cursor-pointer" onClick={save}>save</span>
                  </div>
                  <div className="h-full mx-auto relative">
                   <div className="h-full">
                      {/*notes*/}
                       <div className={`${!showtextEditor?"hidden":"block"}`}>
                          <textarea className=" w-full text-black bg-gray-200 shadow-inner shadow-black p-3 border border-white h-[90vh]" value={notes} onChange={handleNoteInput}></textarea>
                       </div>
                       {/*note editor*/}
                       <div className={`${showtextEditor?"hidden":"block"} h-full overflow-y-scroll p-3`}>
                          <ReactMarkdown  remarkPlugins={[remarkGfm]} className="prose max-w-none" children={notes}></ReactMarkdown>
                       </div>
                   </div>
                   <span onClick={toggleNote} className="fixed right-10 cursor-pointer text-black bottom-10">{!showtextEditor ? <RiEditBoxFill size={40}/>:<RiBookReadFill size={39}/>}</span>
                  </div>
            </div>
			)
	}