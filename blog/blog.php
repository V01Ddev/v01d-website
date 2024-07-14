<!DOCTYPE HTML>

<html>
	<meta name="nerd" content="what you looking at..."/>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" /> 

	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet"> 

    <section id="blog-landing">
        <head>
            <link rel="stylesheet" type="text/css" href="styles/style.css">
            <link rel="shortcut icon" type="image/ico" href="../assets/logo.ico">
            <h1>Blog</h1>
        </head>
    </section>

    <?php
    function make_card($title="", $dis="", $img=""){
    echo "<div class='blog-card'><img src='{$img}' loading='lazy' alt='{$title}'><h2>{$title}</h2><h3>{$dis}</h3></div>";
    }
    ?>

    <section id="blog-gallery">
        <div class="blog-card">
            <?php
            make_card("dumb blog", "How I made this dumb blog using php and Jquery")
            ?>
        </div>
    </section>

</html>
