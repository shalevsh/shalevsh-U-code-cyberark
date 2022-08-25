let arr = [];
$(".generator").on("click", function () {
    console.log($(this).closest("div").attr("id")); // The processor ID
    const computerId = $(this).closest(".computer").data().id;
    console.log(computerId); // log the computer’s data-id
    arr.push({ cmp_id: computerId }); // push this to an array in an object like this: {cmp_id: id}
    console.log($(this).closest(".computer").find(".BUS").text()); // The BUS number
});

// When the validator button is clicked, you should console log the following values for its computer:
// The generator’s text
// The MB
// Both QRs
$(".validator").on("click", function () {
    console.log($(this).closest(".ram").siblings("div").find("button").text()); // The generator’s text
    console.log($(this).closest(".ram").siblings(".MB").text()); // The MB
    console.log($(this).closest(".ram").siblings("div").find("span").text()); // The generator’s text
});
