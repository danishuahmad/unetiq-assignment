import CONST from '../utility/constants';

const add = (note="") => {
	try{
		note = (note.toString()).trim();
		if( note ){
			return {status:true,note}
		}else{
			return {status:false,errors:"Invalid note provided"}
		}
	}catch(e){
		return {status:false,errors:CONST.catch_error}
	}
};
export default {
	add
};
