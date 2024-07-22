<!DOCTYPE HTML>

<html>
    <meta name="nerd" content="what you looking at..."/> <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet"> 

    <!-- Loading Jquery + Javascript -->
    <script src='/blog/scripts/jquery-3.7.1.js'></script>
    <script src='/blog/scripts/script.js'></script>

    <!-- Loading Katex -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body);"></script>

    <?php include $_SERVER['DOCUMENT_ROOT']."/includes/nav-bar.php" ?>

    <head>
        <link rel="stylesheet" type="text/css" href="/blog/styles/style.css">
        <link rel="shortcut icon" type="image/ico" href="/assets/logo.ico">
    </head>

    <body>
        <!-- This is where your content goes into -->

        <?php 

        $mdfn = "";

        require $_SERVER['DOCUMENT_ROOT']."vendor/autoload.php";

        $parsedown = new Parsedown();
        $markdownContent = file_get_contents($mdfn);
        $htmlContent = $parsedown->text($markdownContent);

        echo $htmlContent;
        ?>

    </body>
</html>
