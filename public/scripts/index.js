$(document).ready(function(){

    $(".selectService").on("click", function(){
        var name = $(this).parent().siblings('.productContainer').children('.nameHolder').text()
        name = name.split(" ").join("")
        console.log(name);
        location.href="/inclusions/"+name;
    })
})