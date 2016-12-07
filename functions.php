<?php 


function hneu_scripts() {

    wp_enqueue_script( 'hneu-js', plugins_url( '/js/library-hneu-js.js', __FILE__ ), array( 'jquery' ),null);
    wp_enqueue_script( 'bootstrap', plugins_url( '/js/bootstrap.min.js', __FILE__ ), array( 'jquery' ),null);  
    wp_enqueue_style( 'hneu-css', plugins_url( '/css/library-hneu-css.css', __FILE__ ) );
    wp_enqueue_style( 'bootstrap-theme', plugins_url( '/css/bootstrap-theme.min.css', __FILE__ ) );
    wp_enqueue_style( 'bootstrap-css', plugins_url( '/css/bootstrap.min.css', __FILE__ ) );
    
    wp_localize_script( 'hneu-js', 'hneu', array( 'url' => admin_url( 'admin-ajax.php')));

    }



    function wp_ajax_hneu_query(){
        $name = $_POST['dname'];
        $question = $_POST['dquestion'];
        $today = date("d.m.y"); 
        global $wpdb;
        $wpdb->insert( 
            'library_question', 
            array( 
                'fio' => $name,
                'question' => $question,
                'check_answer' => 0,
                'date_question' => $today
            ), 
            array( 
                '%s',
                '%s',
                '%d',
                '%s'
            ) 
        );
		die();
		return true;
	}



	
add_action( 'the_content', 'my_action_javascript' ); // Write our JS below here

function my_action_javascript($content) { ?>
	<script type="text/javascript" >
	jQuery(document).ready(function($) {

		var data = {
			'action': 'my_action',
			'whatever': 1234
		};

		jQuery.ajax({
		 		type: 'POST',
		 		url: hneu.url, 
		 		data,
		 		beforeSend: function(){
					jQuery("#wrapper-question").fadeOut(300, function(){
						jQuery("#cssload-pgloading").fadeIn();
					});
				},
		 		success: function(response){
		 			jQuery("#cssload-pgloading").fadeOut(300);
		 			jQuery("#wrapper-question").fadeIn();
					//alert('Got this from the server: ' + response);
					$('.test').html(response);

		 			
		 		},
		 		error: function(){
		 			alert("last week error");
		 		}
		 	});

	});
	</script> 
	<?php
	return $content;
}



	add_action( 'wp_ajax_my_action', 'my_action_callback' );
	add_action( 'wp_ajax_nopriv_my_action', 'my_action_callback' );

	function my_action_callback() {
		global $wpdb; // this is how you get access to the database

		$whatever = intval( $_POST['whatever'] );
		$myrows = $wpdb->get_results( "SELECT fio,id FROM library_question" );

			  foreach ( $myrows as $page ){
				    echo $page->id . " - -" . $page->fio . "  <br> ";
			}
			   
			

		wp_die(); // this is required to terminate immediately and return a proper response
}








    
 ?>
