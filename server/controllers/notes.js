import NotesService from "../services/notes";
import validator from "../validators/notes";
import {createHeading} from '../utility/helpers';

const all = async (req, res) => {
	let notes_service = new NotesService();
	let notes = await notes_service.getAll({});
	res.status(200).json({ status: true, notes});
};
const add = async (req, res) => {
	let {note} = req.body;
	
	//	validate request data
	let validation_response = validator.add(note);
	
	//	if valid
	//	? create header and insert
	//	: return error
	if( validation_response.status ){
		//	get heading/title for note
		let header_text = createHeading(note);
		
		//	enter into database
		let notes_service = new NotesService();
		let data = await notes_service.create({title:header_text,body:note});
		res.status(201).json({status:true,note:data});
		
	}else{
		res.status(400).json(validation_response);
	}

};
const edit = async (req, res) => {
	let {note,id} = req.body;
	
	//	validate request data
	let validation_response = validator.add(note);
	
	//	if valid
	//	? create header and insert
	//	: return error
	if( validation_response.status ){
		//	get heading/title for note
		let header_text = createHeading(note);

		//	update database
		let notes_service = new NotesService();
		let data = await notes_service.edit(header_text,note,id);
		res.status(200).json({status:true,note:data});
	}else{
		res.status(400).json(validation_response);
	}
	
};

export default {
	all,
	add,
	edit
};
