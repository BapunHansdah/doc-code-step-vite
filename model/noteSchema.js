import mongoose from 'mongoose'

const {model,Schema} = mongoose

const noteSchema = new Schema({
	by:{
		type:String,
		ref:'User',
		required:true
	},
	notes:{
		type:String
	},
	projectID:{
		type:String,
		ref:'Project',
		required:true
	}
},{timestamps:true})

const Note = model("Note", noteSchema);

export default Note


