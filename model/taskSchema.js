
import mongoose from 'mongoose'

const {model,Schema} = mongoose

const taskSchema = new Schema({
	by:{
		type:String,
		ref:'User',
		required:true
	},
	projectID:{
		type:String,
		ref:'Project',
		required:true
	},
	title:{
		type:String,
		required:true,
		max:30
	},
	description:{
		type:String,
	},
	status:{
		type:Array,
		default:[1,0,0]
	},
	read:{
		type:Boolean,
		default:true
	}
},{timestamps:true})

const Task = model("Task", taskSchema);

export default Task