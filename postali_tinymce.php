<?php 
/*
* Plugin Name: Postali - TinyMCE Additions
* Description: Adds additional functionality to the TinyMCE WYSIWYG editor
* Version: 2.0
* GitHub Plugin URI: https://github.com/Postali-Webdev/Postali-TinyMCE-Additions
* Author: Postali
* Author URI: https://www.postali.com
*/

    // fix stripping empty span tags //
    function override_mce_options($initArray) {
        $opts = '*[*]';
        $initArray['valid_elements'] = $opts;
        $initArray['extended_valid_elements'] = $opts;
        return $initArray;
    } 
    add_filter('tiny_mce_before_init', 'override_mce_options');

    // SHORTCODES
    // map start shortcode
    function map_shortcode() { 
        $mapStart = '<iframe src='; 
        return $mapStart;
    }
    add_shortcode('map_start', 'map_shortcode');

    // map end shortcode
    function map_close_shortcode() { 
    $mapEnd = ' width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'; 
    return $mapEnd;
    }
    add_shortcode('map_end', 'map_close_shortcode');

    // video start shortcode
    function video_shortcode() { 
        $videoStart = '<iframe class="responsive-video" width="560" height="315" src="https://www.youtube.com/embed/'; 
        return $videoStart;
    }
    add_shortcode('video_start', 'video_shortcode');

    // video end shortcode
    function video_close_shortcode() { 
    $videoEnd = ' " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'; 
    return $videoEnd;
    }
    add_shortcode('video_end', 'video_close_shortcode');


    // CREATE MCE BUTTONS
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
    
    // LOAD MCE BUTTONS
    function custom_mce_external_plugins($plugins) {
        // Add a JavaScript file that will handle the custom button functionality
        $plugins['phone_number_button'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-phone-btn.js';
        $plugins['5050_block'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-5050-block.js';
        $plugins['accordion_button'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-accordion-block.js';
        $plugins['map_embed'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-map-embed.js';
        $plugins['video_embed'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-video-embed.js';
        $plugins['cta_block'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-cta-block.js';
        $plugins['two_column_list'] = '/wp-content/plugins/Postali-TinyMCE-Additions/js/mce-two-column-list.js';
        return $plugins;
    }
    add_filter('mce_external_plugins', 'custom_mce_external_plugins');

    // ENQUEUE STYLES NEEDED FOR MCE BLOCKS
    wp_enqueue_style( 'tinymce-styles', '/wp-content/plugins/Postali-TinyMCE-Additions/css/tinymce.css'); // Enqueue child theme styles.css

    // CALL GITHUB PLUGIN UPDATER
    require_once( 'TinyMCEPluginUpdater.php' );
    if ( is_admin() ) {
        new TinyMCEPluginUpdater( __FILE__, 'Postali-Webdev', "Postali-TinyMCE-Additions" );
    }
?>
