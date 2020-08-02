export const createHeading = (text) => {
	let header_array = text.split(" ");
	let header_text = "";
	for( let i=0; i<header_array.length; i++ ){
		//	if index is at third word
		//  ? then stop;
		//	: DO NOTHING
		if( i === 3 ){break;}
		header_text += header_array[i]+" ";
	}
	header_text = header_text.trim();
	header_text += '...';
	return header_text;
};
