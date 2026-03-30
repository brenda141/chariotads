<?php
function chariotads_elite_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'chariotads-elite'),
    ));
}
add_action('after_setup_theme', 'chariotads_elite_setup');

// Load Google Fonts and Styles
function chariotads_elite_scripts() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap', array(), null);
    wp_enqueue_style('elite-main-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'chariotads_elite_scripts');

// Elementor Compatibility
function chariotads_elite_add_elementor_support() {
    add_theme_support('elementor-full-width');
}
add_action('after_setup_theme', 'chariotads_elite_add_elementor_support');

/* --- SHORTCODES FOR ELEMENTOR --- */
// Use [elite_logo] in any Elementor text/shortcode widget
add_shortcode('elite_logo', function() {
    return '<div class="elite-logo-wrapper"> <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="26" cy="22" r="16" stroke="#fb923c" stroke-width="2.5"/><circle cx="26" cy="22" r="4.5" fill="#f59e0b"/><circle cx="26" cy="22" r="2" fill="#0a1a2e"/></svg> <span style="font-weight:900; color:white; margin-left:10px; font-family:\'Montserrat\', sans-serif;">Chariotads</span></div>';
});
