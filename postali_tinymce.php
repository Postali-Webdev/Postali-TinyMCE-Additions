<?php 
/*
* Plugin Name: Postali - TinyMCE Additions
* Description: Adds additional functionality to the TinyMCE WYSIWYG editor
* Version: 1.0
* Author: Postali
* Author URI: https://www.postali.com
* Version: 1.1
* GitHub Theme URI: https://github.com/Postali-Webdev/TinyMCE-Additions
* GitHub Branch: master
*/

    // fix stripping empty span tags //
    function override_mce_options($initArray) {
        $opts = '*[*]';
        $initArray['valid_elements'] = $opts;
        $initArray['extended_valid_elements'] = $opts;
        return $initArray;
    } 
    add_filter('tiny_mce_before_init', 'override_mce_options');
    
    function phone_number_callback() {
        $phone_number = get_field('phone_number','options'); 
        echo $phone_number;
        wp_die();
    }
    add_action( 'wp_ajax_get_phone_number', 'phone_number_callback' );
    add_action( 'wp_ajax_nopriv_get_phone_number', 'phone_number_callback' );
    
    function custom_mce_buttons($buttons) {
        // Add your custom button to the array
        $buttons[] = 'phone_number_button';
        $buttons[] = '5050_block';
        $buttons[] = 'accordion_button';
        $buttons[] = 'map_embed';
        $buttons[] = 'video_embed';
        $buttons[] = 'cta_block';
        $buttons[] = 'two_column_list';
        return $buttons;
    }
    add_filter('mce_buttons', 'custom_mce_buttons');
    
    function custom_mce_external_plugins($plugins) {
        // Add a JavaScript file that will handle the custom button functionality
        $plugins['phone_number_button'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-phone-btn.js';
        $plugins['5050_block'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-5050-block.js';
        $plugins['accordion_button'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-accordion-block.js';
        $plugins['map_embed'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-map-embed.js';
        $plugins['video_embed'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-video-embed.js';
        $plugins['cta_block'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-cta-block.js';
        $plugins['two_column_list'] = '/wp-content/plugins/Postali_TinyMCE_additions/js/mce-two-column-list.js';
        return $plugins;
    }
    add_filter('mce_external_plugins', 'custom_mce_external_plugins');

    wp_enqueue_style( 'tinymce-styles', '/wp-content/plugins/Postali_TinyMCE_additions/css/tinymce.css'); // Enqueue child theme styles.css

?>
