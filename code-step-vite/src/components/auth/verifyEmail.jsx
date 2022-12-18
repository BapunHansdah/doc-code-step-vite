import {Link} from 'react-router-dom'
import {sign_in} from '../../actions/index'
import {useNavigate} from 'react-router-dom'
function Verify(){
   const navigate = useNavigate()
	return(	
		<div className="max-w-sm mx-auto m-60">
            <div className="text-2xl">Verify your email and <span className="text-blue-500"><Link to="/sign">Sign in</Link></span></div>
		</div>
	)
}

export default Verify;