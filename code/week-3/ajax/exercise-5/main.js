const fetch = (searchVal) => {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=6D5sLI5HrqyEfqbEpmAPI0IpaZdeziHp`,
        success: function (response) {
            console.log(response);
            const url = response.data[0].embed_url;
            console.log(url);
            $("#frame").attr("src", url);
        },
    });
};
$("#submit-btn").on("click", function () {
    const searchVal = $("#inputName").val();
    console.log(searchVal);
    fetch(searchVal);
});
