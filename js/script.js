$(".submenu").click(function (){
    $(".main-mobilemmenu").slideToggle()
})
$(".menu-mobile>li>a").click(function (){
    $(".main-mobilemmenu").slideToggle()
})
/*menu*/

console.log($("#about").position().top)
$(".mobile-menu").children().eq(0).click(function (){
    $('html, body').animate(
        {
            scrollTop:0
        },
        500
    );
})
$(".about-menu").click(function (){

    $('html, body').animate(
        {
            scrollTop:$("#about").position().top
        },
        500
    );
})
$(".menu-menu").click(function (){

    $('html, body').animate(
        {
            scrollTop:$("#menu-desert").position().top
        },
        500
    );
})
$(".events-menu").click(function (){

    $('html, body').animate(
        {
            scrollTop:$("#events").position().top
        },
        500
    );
})
$(".gallery-menu").click(function (){

    $('html, body').animate(
        {
            scrollTop:$("#gallery").position().top
        },
        500
    );
})
$(".contact-menu").click(function (){

    $('html, body').animate(
        {
            scrollTop:$("#contact").position().top
        },
        500
    );
})

/*scroll*/


$(window).scroll(function (x) {

    let bodyTop = $(document).scrollTop();

    if (window.matchMedia('(max-width: 900px)').matches) {
        if(bodyTop > 100){
            $("header").css({
                position: "fixed",
                top: "0px",
                background: "white",
                padding: "11px 0",
                borderBottom: "1px solid #cdc9c9",
            })
            $(".main-mobilemmenu").css({
                top:'46px',
            })
        }

        if(bodyTop < 50){
            $("header").css({
                position: "absolute",
                top: "10px",
                background: "unset",
                padding: "unset",
                borderBottom: "unset",
            })
            $(".main-mobilemmenu").css({
                top:'25px',
            })
        }
    }else{
        if(bodyTop > 100){
            $("header").css({
                position: "fixed",
                top: "0",
                background: "white",
                padding: "11px 0",
                borderBottom: "1px solid #cdc9c9",
            })
        }
        if(bodyTop < 50){
            $("header").css({
                position: "absolute",
                top: "42px",
                background: "unset",
                padding: "unset",
                borderBottom: "unset",
            })
        }
    }
})
