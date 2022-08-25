$(".box").hover(function () {
    $(this).css("background-color", "purple");
    $(`.box`).not(this).css("background-color", "orange");
});

// $("body").on("click", "#box", function () {
//     $(this).remove();
// });
