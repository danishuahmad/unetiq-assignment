import React, { Component } from 'react';
import CONST from '../../utility/constants';
import Header from '../Header/Index';
import Sidebar from '../Sidebar/Index';
import Notepad from '../Notepad/Index';
import {getNotes,postNote,editNote} from './Actions';

export default class Application extends Component {

	constructor(props){
		super(props);
		this.state = {
			notes: [],
			displayed_note: {}
		}
	}
	//** HOOKS **//
	componentDidMount(){
		getNotes().then( response => {
			let notes = [];
			
			//	server responded OK
			if( response.status ){
				notes = response.notes;
			}
			
			//	if no previous notes
			//  ? set default AddNew
			//	: populate notes and First Note
			if( notes.length === 0 ){
				this.addNew();
			}else{
				let displayed_note = notes[0];
				this.setState({notes,displayed_note});
			}
			
		});
	}
	
	//** FUNCTIONS **//
	showNote = (displayed_note) => {
		this.setState({displayed_note})
	};
	addNew = () => {
		let {notes} = this.state;
		
		//	if no new blank note present
		//	? then insert new blank note
		//	: DO NOTHING
		if( notes.findIndex( note => note.body === '' ) === -1 ){
			let new_note = {title:CONST.new_note.default_title,body:'',id:-1};
			notes.unshift(new_note);
			this.setState({displayed_note:new_note,notes});
		}
	};
	submitNew = (note,id) => {
		//	if new note
		//	? send new note API
		//	: send edit note API
		if( id === -1 ){
			//	submit data to server and in return update all notes
			postNote(note).then( response => {
				//	server responded OK
				if( response.status ){
					let note = response.note;
					let {notes} = this.state;
					
					//	replaced unsaved note with saved note
					notes[0] = note;
					this.setState({notes,displayed_note:note});
				}else{
					alert(response.error);
				}
			})
		}else{
			this.updateNote(note,id);
		}
	};
	updateNote = (note,id) => {
		//	submit data to server and in return update all notes
		editNote(note,id).then( response => {
			//	server responded OK
			if( response.status ){
				let note = response.note;
				let {notes} = this.state;
				
				//	replaced unsaved note with saved note
				let note_index = notes.findIndex(note_object => note_object.id === id);
				notes[note_index] = note;
				this.setState({notes});
			}else{
				alert(response.error);
			}
		})
	};
    render() {
		let {notes,displayed_note} = this.state;
		return <div className="main-app">
			
			<Header addNew={this.addNew} />
			<Sidebar displayed_note={displayed_note} notes={notes} showNote={this.showNote}/>
			<Notepad displayed_note={displayed_note} submitNew={this.submitNew}/>
			
		</div>;
    }
}
