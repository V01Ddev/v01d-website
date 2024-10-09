<html>
    <meta name="nerd" content="what you looking at..."/>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 

<?php
include $_SERVER['DOCUMENT_ROOT']."/components/navbar.php";
include $_SERVER['DOCUMENT_ROOT']."/components/font.php";

$content_dir = scandir('./content/');

$content_dir = array_diff($content_dir, [".", "..", ".gitignore"]);
$content_dir = array_values($content_dir);

function blog_card($directory_name){
    $blog_card_title = str_replace("_", " ", $directory_name);
    print_r($blog_card_title);
}

blog_card("Hello_World");
?>

    <head>
        <link rel="shortcut icon" type="image/ico" href="../v01d.ico">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <div class="BlogPage">
        <section class="Blog">
            <h1>Blog</h1>
            <br />
            <h2>still haven't written any blogs 😐</h2>
        </section>
    </div>
</html>
