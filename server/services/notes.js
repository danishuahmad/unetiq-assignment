import notes_data from '../database.json';
class NotesService {

    async getAll(){
		return notes_data || [];
    }
    async create(data){
        //  create id
        data = {...data,id:notes_data.length};
        
        //  add new note at the first position
		notes_data.unshift(data);
	
		//  open file stream to write
		const fs = require('fs');
		fs.writeFileSync('../database.json',notes_data);
  
		//  return data
        return data;
    }
	async edit(header_text,note_text,id){
		//  edit note by finding index by id
		let note_index = notes_data.findIndex(note_data => note_data.id === id);
		console.log(note_index);
		notes_data[note_index].title = header_text;
		notes_data[note_index].body = note_text;
		
		//  open file stream to write
		const fs = require('fs');
		fs.writeFileSync('../database.json',notes_data);
		
		//  return data
		return notes_data[note_index];
	}

}

export default NotesService;