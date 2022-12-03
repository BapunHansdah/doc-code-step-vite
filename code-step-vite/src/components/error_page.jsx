import {Link} from 'react-router-dom'
export default function Error_page(){
	return (
		   <div className="flex h-screen  justify-center items-center flex-col">
		   	  <div className="text-2xl">Encountered some problem !! please add informations currectly .. </div>
		   	  <div className="underline font-bold cursor-pointer text-blue-500"><Link to='/'>Sign in again &gt;</Link></div>
		   </div>
		)
}