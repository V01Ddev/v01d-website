<!DOCTYPE html>

<html>
	<meta name="nerd" content="what you looking at..."/>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" /> 
					
    <?php
    include './components/font.php';
    include './components/navbar.php';
    ?>

	<!-- intro and logo -->
	<section class="Home">
		<head>
            <link rel="stylesheet" type="text/css" href="style.css">
            <link rel="shortcut icon" type="image/ico" href="/v01d.ico">

            <img class="home_logo" src='assets/v01d.svg', alt='logo'/>
            <h1 id="typing"></h1>
		</head>
	</section>


	<body>
		<!-- About Me -->
		<section class="Aboutme">

			<h2>About me</h2>

            <p>I am a highschool student with a strong affinity for electronics and programming.</p>
		</section>

		<!-- My Work-->
		<section class='Work'>
			<h3>You can find my work on</h3>
            <a href="https://github.com/V01Ddev" target="_blank">github</a>
		</section>
	</body>

    <script src="./script.js"></script>
</html>
