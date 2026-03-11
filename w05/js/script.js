$("#preamble-btn-1").click(function(){
    $("#preamble-btn-2").css({
        "background":"blue",
        "transform":"rotate(45deg)"
        
    })
})

$("#preamble-btn-2").click(function(){
    $("#preamble-btn-1").toggleclass("rotate")
        
    })

$("#h1").click(function(){

    ("#menu").toggleClass("active")