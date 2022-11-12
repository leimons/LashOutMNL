$(function(){

    // Hide all overlays on page load
    $(".category-overlay").hide();
    
    // Setup toggle show/hide on mouse in/out
    for (let i = 1; i <= 5; i++)
        $(`#categ${i} > img`).hover(function () {
            $( this ).siblings(".category-overlay").show();
        })

    $(".category-overlay").mouseout(function () { 
        $( this ).hide();
    });

});