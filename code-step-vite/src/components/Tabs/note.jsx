import {useState,useEffect} from 'react'
import {RiEditBoxFill} from 'react-icons/ri'
import {RiBookReadFill} from 'react-icons/ri'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function NoteComponent({data}){
  const [showNote, setShowNote] = useState(false);
  const [notes,setNotes] = useState("") 
  const [showtextEditor,setShowtextEditor] = useState(true) 
  const [noteData,setNoteData] =useState("")

  function textEditor(){
    setShowtextEditor(!showtextEditor)
    // setNotes(step[stepselect].notes)
  }

  function handleNoteInput(e){
      setNotes(e.target.value)
      updateNote(e.target.value)
  }

  function updateNote(e){
      // step.map((m,i)=>{
      //   if(m.step === stepselect){
      //     setNoteData(m.notes = e)
      //   }
      // })
  }

  function showtextNoteTab() {
    setShowtextEditor(true)
    // setNotes(step[stepselect].notes)
    // setNoteData(step[stepselect].notes)
  }

  function showtextEditorTab() {
    setShowtextEditor(false)
  }


		return (
			  <div className={`${showNote ? 'hidden': 'block'} w-full h-full`}>
                  <div className="font-bold p-1 bg-blue-500 shadow border-r text-sm text-white">
                         {!showtextEditor?"Notes":"Editor"}
                  </div>
                  <div className="h-full mx-auto relative">
                   <div className="h-full">
                      {/*notes*/}
                       <div className={`${!showtextEditor?"hidden":"block"}`}><textarea className=" w-full text-black bg-gray-100 p-3 border border-white h-[90vh]" value={notes} onChange={handleNoteInput}></textarea></div>
                       {/*note editor*/}
                       <div className={`${showtextEditor?"hidden":"block"} h-full overflow-y-scroll`}><ReactMarkdown rehypePlugins={[rehypeRaw]} className="prose max-w-none"></ReactMarkdown>
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf

                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf

                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf

                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqffqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf
                       fqfqefqe  qfqfqf fqfqf

                       </div>
                   </div>
                   <span onClick={textEditor} className="fixed right-10 cursor-pointer text-black bottom-10">{!showtextEditor ? <RiEditBoxFill size={40}/>:<RiBookReadFill size={39}/>}</span>
                  </div>
            </div>
			)
	}