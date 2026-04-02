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
    return '
    <div class="elite-logo-wrapper">
        <img src="/chariotads_logo.png" alt="Chariotads" style="height: 60px; width: auto; object-fit: contain;">
    </div>';
});

// Use [elite_social_links] in footer
add_shortcode('elite_social_links', function() {
    $links = [
        ['url' => 'https://facebook.com/profile.php?id=61588052168432', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'],
        ['url' => 'https://x.com/charioads36', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>'],
        ['url' => 'https://linkedin.com/in/chariotads-promo-8a43bb3b4', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z"/></svg>'],
    ];

    $html = '<div class="elite-social-links">';
    foreach ($links as $link) {
        $html .= sprintf('<a href="%s" class="social-icon" target="_blank" rel="noopener noreferrer">%s</a>', esc_url($link['url']), $link['icon']);
    }
    $html .= '</div>';
    return $html;
});
