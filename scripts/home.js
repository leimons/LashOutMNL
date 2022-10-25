$(function(){

    // Hide all overlays on page load
    $(".category-overlay").hide();
    
    for (let i = 1; i <= 5; i++)
        $("#categ"+i+"-image").hover(function () {
            $( this ).siblings(".category-overlay").show();
        })

    $(".category-overlay").mouseout(function () { 
        $( this ).hide();
    });

    console.log('yes');

});