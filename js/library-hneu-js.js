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
				beforeSend: function(){
					jQuery("#wrapper-request-form").fadeOut(300, function(){
						jQuery("#cssload-pgloading").fadeIn();
					});
				},
				success: function(data){
					jQuery("#cssload-pgloading").fadeOut(300, function(){
						jQuery("#wrapper-request-form").fadeIn();
						jQuery("#wrapper-request-form").html(`
							<div class="alert alert-success alert-dismissible">
							 <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
								<h2>Питання відправлено успішно</h2>
							</div>
							<div class="other-way">
								<input style="margin:10px;" id="update" onClick="window.location.reload()" name="update" type="button" value="Задати нове питання" />
								<br>
								<a id="question-last-week" href="/?page_id=156">Список питань та відповідей за останній тиждень</a>
							</div>


							`

															)
					});

				}
			});
		});
	});

// show last week questions button
/*jQuery(document).ready(function( $ ) {
		
	 $('#last-week-question').ready(function(){
	 	console.log("last week js");
		

	 	$.ajax({
	 		type: 'POST',
	 		url: hneu.url,
	 		dataType: "json", 
	 		data:{
	 			"action": "wp_ajax_last_week_question",
	 			 "test_week": "test_week_date",
	 			 "demo": "demo"
	 			},
	 		success: function(result){
	 			
	 			 
	 			console.log("Result =  "+result);


	 			
	 		},
	 		error: function(){
	 			alert("last week error");
	 		}
	 	});
	 	
	 })
	
});*/


jQuery(document).ready(function($) 
{
    $('#last-week-question').ready(function() 
    {
        
        
    });
});



		/*
<div id="cssload-pgloading" class="">
	<div class="cssload-loadingwrap">
		<ul class="cssload-bokeh">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</div>
		*/

/*
$('#last-week-question').html(`

			<table class="tg" style="undefined;table-layout: fixed; width: 758px">
				<colgroup>
				<col style="width: 50px">
				<col style="width: 200px">
				<col style="width: 200px">
				<col style="width: 80px">
				<col style="width: 300px">
				</colgroup>
				  <tr>
				    <th class="tg-yw4l">№ </th>
				    <th class="tg-yw4l">ПІБ</th>
				    <th class="tg-yw4l">ПИТАННЯ</th>
				    <th class="tg-yw4l">ДАТА</th>
				    <th class="tg-yw4l">ВІДПОВІДЬ</th>
				  </tr>
				  <tr>
				    <td class="tg-yw4l">1</td>
				    <td class="tg-yw4l">Степанов</td>
				    <td class="tg-yw4l">Вопрос</td>
				    <td class="tg-yw4l">10/10/10</td>
				    <td class="tg-yw4l">Ответ</td>
				  </tr>
			</table>







	 		`);


*/