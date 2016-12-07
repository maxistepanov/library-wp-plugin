/*jQuery(document).ready(function( $ ) {
		
	 $('#submit').click(function(){
	 	
		var name = jQuery("#dname").val();
		var name = jQuery("#dname").val();

	 	$.ajax({
	 		type: 'POST',
	 		url: hneu.url,
	 		data:{
	 			"action": "wp_ajax_hneu_query",
	 			 "dname": name
	 			},
	 		success: function(result){
	 			console.log(result);
	 		},
	 		error: function(){
	 			
	 		}
	 	});
	 	
	 })
	
});




*/
 // send question button
	jQuery(document).ready(function(){
		jQuery("#submit").click(function(){
	    var name = jQuery("#dname").val();
	    var question = jQuery("#dquestion").val();
	    console.log(question);
	   	 
			jQuery.ajax({
				type: 'POST',
				url: hneu.url,
				data: {
					"action": "wp_ajax_hneu_query",
					 "dname":name,
					 "dquestion":question
					},
				success: function(data){
					alert("работает пример");
					}
			});
		});
	});

// show all questions button
jQuery(document).ready(function( $ ) {
		
	 $('#allQuestion').click(function(){
	 	alert("check");
		

	 	/*$.ajax({
	 		type: 'POST',
	 		url: hneu.url,
	 		data:{
	 			"action": "wp_ajax_hneu_query",
	 			 "dname": name
	 			},
	 		success: function(result){
	 			console.log(result);
	 		},
	 		error: function(){
	 			
	 		}
	 	});*/
	 	
	 })
	
});
