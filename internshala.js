$('document').ready(function(){

    $('#tb2').mouseenter(function(){
        $('#tb2_img').attr("src", "Images/blue_arrow.png")
    })
    $('#tb2').mouseleave(function(){
        $('#tb2_img').attr("src", "Images/grey_arrow.png")
    })
    $('#tb3').mouseenter(function(){
        $('#tb3_img').attr("src", "Images/blue_arrow.png")
    })
    $('#tb3').mouseleave(function(){
        $('#tb3_img').attr("src", "Images/grey_arrow.png")
    })
    $('#tb5').mouseenter(function(){
        $('#tb5_img').attr("src", "Images/dark_white_arrow.png")
    })
    $('#tb5').mouseleave(function(){
        $('#tb5_img').attr("src", "Images/white_arrow.png")
    })
    $('#vai_a').mouseenter(function(){
        $('#vai_img').attr("src", "Images/dark_blue_side_arrow.png")
    })
    $('#vai_a').mouseleave(function(){
        $('#vai_img').attr("src", "Images/blue_side_arrow.png")
    })
});