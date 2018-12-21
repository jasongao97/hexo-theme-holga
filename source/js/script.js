$(function () {
    $(".posts > .post").click(function () {
        $(location).attr('href', $(this)[0].id);
    })
    $(".navbar-icon > img").click(function () {
        console.log("try");
    })
    
    $('pre').addClass('prettyprint linenums').attr('style', 'overflow:auto;');
    prettyPrint();
});