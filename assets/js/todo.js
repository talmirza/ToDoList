// The 16 lines of code below can be revised with one line code Toggle code below
// To check off specific items by clicking on them 
// $("li").click(function(){
//     //check if the item is grey already first
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//     });
//     } else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//     });
//     }
// });       

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); //This stops the "event bubbling" to parent elements
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // Get the new to-do from the input box
        var newTodo = $(this).val();
        // Empty the input box
        $(this).val("");             
        // Create a new li and add it to the ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});
