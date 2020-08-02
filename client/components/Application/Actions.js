import CONST from '../../utility/constants';
import axios from 'axios';

export const getNotes = () => {
    return axios.get(CONST.API_URL+'api/notes').then(function (response){
        if( response.data.status ){
            let {notes} = response.data;
            return {status:true,notes}
        }else{
            //  we will show only first error returned by server
            let error = response.data.errors[0];
            return {status:false,error}
        }
    }).catch(function (error) { //  some error occurred
        return {status:false,error: "Unknown error occurred while creating your session."}
    });
};
export const postNote = (note) => {
    return axios.post(CONST.API_URL+'api/note/add',{note}).then(function (response){
        if( response.data.status ){
            let {note} = response.data;
            return {status:true,note}
        }else{
            //  we will show only first error returned by server
            let error = response.data.errors[0];
            return {status:false,error}
        }
    }).catch(function (error) { //  some error occurred
        return {status:false,error: "Unknown error occurred while creating your session."}
    });
};
export const editNote = (note,id) => {
	return axios.post(CONST.API_URL+'api/note/edit',{note,id}).then(function (response){
		if( response.data.status ){
			let {note} = response.data;
			return {status:true,note}
		}else{
			//  we will show only first error returned by server
			let error = response.data.errors[0];
			return {status:false,error}
		}
	}).catch(function (error) { //  some error occurred
		return {status:false,error: "Unknown error occurred while creating your session."}
	});
};
