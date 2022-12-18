import mongoose from 'mongoose'

const {model,Schema} = mongoose

const projectSchema = new Schema({
	by:{
		type:String,
		ref:'User',
		required:true
	},
	name:{
		type:String,
		required:true
	},
	repo:{
		type:String,
		required:true
	},
	token:{
		type:String
	},
	projectID:{
		type:String,
		required:true
	}
},{timestamps:true})

const Project = model("Project", projectSchema);

export default Project


