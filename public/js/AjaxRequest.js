/**
 * Ajax Request
 * @author mail@chrisaiv.com
 *  
*/

var AjaxRequest = {
	start: function( xhrInstance ){
		console.log( "Loading..." );
	},
	error: function ( xhrInstance, message, optional ){
		console.log( "There was an error loading the document.", message );
	},
	complete: function ( xhrInstance, status ){
		console.log( "complete", status );
	},
	init: function( url, method, successCallback, data){
		console.log( "ajaxRequest", url, method, data );
	    $.ajax({
	        url: url + "&" + data,
			type: method,
	        dataType: "jsonp",
			//Not required
			//jsonpCallback: successCallback.name.toString(),
//			data: ( data ) ? data : "",
			contentType: "application/json",
	        encoding:"text/plain",
	        beforeSend: this.start,
	        success: successCallback,
	        error: this.error,
	        complete: this.complete
	    });
	}
}
