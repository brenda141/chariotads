<?php get_header(); ?>

<main id="primary" class="site-main" style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            ?>
            <div style="margin-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;">
                <h2 style="margin-top: 0;"><a href="<?php the_permalink(); ?>" style="color: var(--elite-orange); text-decoration: none;"><?php the_title(); ?></a></h2>
                <div style="color: #ccc;">
                    <?php the_excerpt(); ?>
                </div>
            </div>
            <?php
        endwhile;
    else :
        echo '<p>No content found.</p>';
    endif;
    ?>
</main>

<?php get_footer(); ?>
