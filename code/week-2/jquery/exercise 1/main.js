const inputElement = "<input type='text' id='input-id'>";
const buttonElement = "<button id ='btn' >Add hunman</button>";
$("body").append($(inputElement));
$("body").append($(buttonElement));

const addDiv = function () {
    const text = $("#input-id").val();
    $("ul").append(`<li class='box'>${text}</li>`);
};

$("body").on("click", "#btn", function () {
    addDiv();
    $("#input-id").val("");
});
