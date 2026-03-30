<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="canonical" href="<?php echo esc_url(get_permalink()); ?>" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="elite-nav">
    <div class="container">
        <a href="<?php echo esc_url(home_url('/')); ?>" style="text-decoration: none;">
            <?php echo do_shortcode('[elite_logo]'); ?>
        </a>
        <div class="nav-links">
            <a href="http://dashboard.chariotads.com/index.php?page=index/register" class="elite-btn" style="padding: 10px 25px; text-decoration: none; display: inline-block;">LOGIN / SIGN UP</a>
        </div>
    </div>
</nav>

<div id="content" class="site-content">
