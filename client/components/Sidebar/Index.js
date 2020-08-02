import React, { Component } from 'react';

export default class Sidebar extends Component {
	
	getClassNames = (id) => {
		let {displayed_note} = this.props;
		
		if( displayed_note.id === id ){
			return 'note-heading active';
		}
		return 'note-heading';
	};
	render() {
		let {notes,showNote} = this.props;
		return <div className="sidebar">
			
			{
				notes.map((note) =>
					<div
						key={note.id}
						className={this.getClassNames(note.id)}
						onClick={()=>showNote(note)}
					>
						{note.title}
					</div>
				)
			}
			
		</div>;
	}
}
