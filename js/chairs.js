$( document ).ready(function() {

	//console.log('every page');

	if($('body').is(".page-id-533")){
		//load chairs section content from cals committees page
 		$("div.entry-content").load( "http://www.cals.wisc.edu/departments/office-of-dean-and-director-2/cals-committees/ #chairs-content" );

	}

}); 