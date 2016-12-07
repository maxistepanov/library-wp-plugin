<?php
/*
Plugin Name: Library Managment
Description: Description
Plugin URI: http://#
Author: Author
Author URI: http://#
Version: 1.0
*/


require __DIR__ . '/functions.php';


    add_action( 'wp_enqueue_scripts', 'hneu_scripts' );

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
    add_action('wp_ajax_wp_ajax_hneu_query', 'wp_ajax_hneu_query');
    add_action('wp_ajax_nopriv_wp_ajax_hneu_query', 'wp_ajax_hneu_query');

 

  


?>