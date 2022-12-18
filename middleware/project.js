import jwt from 'jsonwebtoken'

export default (req,res,next) =>{

	const token = req.cookies.project_token
	if(!token){
		return res.status(401).json("invalid project")
	}
	const verifyToken = jwt.verify(token,process.env.JWT_PROJECT_SECRET,(err,decoded)=>{
		if(err){
			return res.status(401).json("invalid project token")
		}

		req.project = decoded
		return next()
	})
	return verifyToken

}