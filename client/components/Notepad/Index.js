import React, { Component } from 'react';
import CONST from '../../utility/constants';

export default class NotePad extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			note_text:''
		};
	}
	//** HOOKS **//
	componentDidMount(){
		let {displayed_note} = this.props;
		
		//	This is being treated as default
		this.setNoteText(displayed_note.body);
	}
	componentDidUpdate(prev_props, prev_state){
		let old_displayed_note = prev_props.displayed_note;
		let new_displayed_note = this.props.displayed_note;
		
		//	if no change from previous data
		//	? set new data
		//	: DO NOTHING
		if( old_displayed_note.body !== new_displayed_note.body ){
			this.setNoteText(new_displayed_note.body);
		}
	}
	
	//** FUNCTIONS **//
	setNoteText = (note_text="") => {	//	update textarea value
		//	if text is empty
		//	? focus to prompt user to type something
		//	: DO NOTHING
		if( note_text.length === 0 ){
			this.note_text_reference.focus();
		}
		
		this.setState({note_text})
	};
	updateNoteText = (e) => {	//	when user change/type something
		let note_text = e.target.value;
		this.setNoteText(note_text)
	};
	submit = () => {
		let {note_text} = this.state;
		let {submitNew,displayed_note} = this.props;

		if( note_text ){
			let {id} = displayed_note;
			submitNew(note_text,id);
		}
	};
	render() {
		let {note_text} = this.state;
		return <div className="notepad">
			
			<textarea
				rows="15"
				ref={ref => this.note_text_reference = ref}
				placeholder={CONST.new_note.placeholder}
				value={note_text}
				onChange={this.updateNoteText}
			/>
			
			<button className="save-btn" onClick={this.submit}>Save</button>
			
		</div>;
	}
}
