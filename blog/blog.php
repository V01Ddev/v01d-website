<!DOCTYPE HTML>

<html>
    <meta name="nerd" content="what you looking at..."/> <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet"> 

    <!-- Loading Jquery + Javascript -->
    <script src='scripts/jquery-3.7.1.js'></script>
    <script src='scripts/script.js'></script>

    <?php include "../includes/nav-bar.php" ?>

    <section id="blog-landing">
        <head>
            <link rel="stylesheet" type="text/css" href="styles/style.css">
            <link rel="shortcut icon" type="image/ico" href="../assets/logo.ico">

            <h1>Blog</h1>
        </head>
    </section>

    <?php
    function make_card($title="", $dis="", $img=""){
    if ($img == "") {
    echo "<div class='blog-card'> <h2>{$title}</h2> <h3>{$dis}</h3> </div> </div>";
    } else {
    echo "<div class='blog-card'> <h2>{$title}</h2> <img src='{$img}' alt='{$title}'> <h3>{$dis}</h3> </div> </div>";
    }
    }
    ?>

    <body>
        <section id="blog-gallery">
            <!-- <h2> There aren't any blog posts for now... </h2> -->
            <?php make_card("test blog", "This should NEVER reach deployment") ?>
            <a href="./base.php">base.php</a>
            <!-- <?php make_card("ESP Glider", "The process of building a gilder using ESP32s") ?> -->
        </section>
    </body>
</html>
