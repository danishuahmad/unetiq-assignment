import React, { Component } from 'react';
import CONST from '../../utility/constants';

export default class Header extends Component {
	
	render() {
		let {addNew} = this.props;
		return <div className="header">
			
			{/** ADD NEW NOTE BUTTON **/}
			<div className="add-btn">
				<a onClick={addNew}>
					<img src={require('../../assets/images/plus.png')}/>
				</a>
			</div>
			
			{/** TITLE: Change title in constants.js to edit **/}
			<div className="title">
				<h1>{CONST.application_title}</h1>
			</div>
		
		</div>;
	}
}
