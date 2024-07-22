
$(document).ready(function() {

    $(".blog-card").click(function(){
        var title = $(this).find("h2").text();
        title = title.replace(" ", "_");
        dir = title;
        title = title + ".php";
        url = "/blog/content/" + dir + "/" + title;
        location.href=url;
    });
});
