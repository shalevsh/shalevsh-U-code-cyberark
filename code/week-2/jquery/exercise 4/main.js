$(".item").on("click", function () {
    let text;
    if ($(this).data().instock) {
        text = $(this).text();
        $(cart).append(`<div class=cart-item>${text}</div>`);
    }
});
