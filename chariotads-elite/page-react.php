<?php
/**
 * Template Name: React App Template
 * Description: A template that loads the full Chariotads React Application exactly as it was built, while maintaining WordPress compatibility for all other pages.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    
    <?php wp_head(); ?>

    <!-- Load the compiled React Application styles -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/react-app/assets/index.css">
    
    <style>
        /* Essential overrides to prevent WordPress theme bleeding into React */
        body { margin: 0; padding: 0; }
        #wpadminbar { display: none; }
        html { margin-top: 0 !important; }
    </style>
</head>
<body <?php body_class(); ?>>
    
    <!-- React Mount Point -->
    <div id="root"></div>

    <?php wp_footer(); ?>
    
    <!-- Load the compiled React Application script -->
    <script type="module" src="<?php echo get_template_directory_uri(); ?>/react-app/assets/react-app.js"></script>

</body>
</html>
