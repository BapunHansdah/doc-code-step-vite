import {useState,useEffect} from 'react'
import {RiEditBoxFill} from 'react-icons/ri'
import {RiBookReadFill} from 'react-icons/ri'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import useAuth from '../useAuth'
import axios from 'axios'


export default function NoteComponent({data}){
  const [showNote, setShowNote] = useState(false);
  const [noteList,setNoteList] = useState([])
  const [notes,setNotes] = useState("")  
  const [showtextEditor,setShowtextEditor] = useState(false) 
  const [checkNoteCount,setCheckNoteCount] = useState(0)
  const [loading,setLoading] = useState(false)
  const {auth} = useAuth()

  // console.log(auth)
  
  async function addNote(){
      try{
                if(auth.token){
                 await axios.post("/api/note/",{notes:notes},{
                    'headers': {
                                  'Authorization': (auth.token ? auth.token : "")    
                        }
                     }).then(res=>{
                        setNotes("")
                        setNoteList([...noteList,{...res.data}])
                        setCheckNoteCount(1)
                     })
             }

               }catch(err){
                console.log(err)
               }
   }


   async function getNote(){
      setLoading(true)
      try{
                if(auth.token){
                 await axios.get("/api/note/",{
                    'headers': {
                                  'Authorization': (auth.token ? auth.token : "")    
                        }
                     }).then(res=>{
                        // console.log(res.data)
                        setNoteList(res.data)
                        setLoading(false)
                        setCheckNoteCount(res.data.length)
                        if(res.data.length){
                           setNotes(res.data[0].notes)
                        }
                      })
             }

               }catch(err){
                console.log(err)
               }
   }

  function toggleNote(){
    setShowtextEditor(!showtextEditor)
  }

  function handleNoteInput(e){
      setNotes(e.target.value)
  }
async function deleteNote(id){

            try{ 
                    await axios.delete(`api/note/delete/${id}`,{
                    'headers': {
                                'Authorization': (auth.token ? auth.token : "")    
                               }
                    }).then(res=>{
                        console.log(res.data)
                    })
                    setCheckNoteCount(0)
                    
            }catch(err){
                console.log(err)
            }
      
  }




  async function save(id){
             try{ 
                    await axios.put(`api/note/edit/${id}`,{notes:notes},{
                    'headers': {
                                'Authorization': (auth.token ? auth.token : "")    
                               }
                    }).then(res=>{
                        console.log(res.data)
                    })
            }catch(err){
                console.log(err)
            }
  }

  useEffect(()=>{
    getNote()
  },[auth.token])

    if(loading) return <>loading...</>

      if(!checkNoteCount) return (
        <div className="w-full flex justify-center items-center ">
          <div className="flex flex-col gap-5">
             <span className="text-2xl">You have note made any note yet !</span>
             <div className="text-center"><button className="bg-blue-500 p-2 text-white" onClick={addNote}> Add Note </button></div>
          </div>
        </div>
    )

        

   
		return (
			  <div className={`${showNote ? 'hidden': 'block'} w-full h-full`}>
                  <div className="font-bold p-1 bg-blue-500 shadow border-r text-sm text-white flex justify-between">
                         <span>{!showtextEditor?"Notes":"Editor"}</span>
                         <div className="flex gap-5">
                            <span className="px-1 text-green-500 bg-white cursor-pointer font-regular" onClick={()=>save(noteList[0]._id)}>save</span>
                            <span className="px-1 bg-red-500 text-white cursor-pointer font-regular" onClick={()=>deleteNote(noteList[0]._id)}>delete</span>
                         </div>
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