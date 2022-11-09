$(document).ready(function(){

    $(".selectService").on("click", function(){
        var name = $(this).parent().siblings('.productContainer').children('.nameHolder').text()
        console.log(name);
    })
})