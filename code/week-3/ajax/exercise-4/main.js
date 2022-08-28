const fetch = () => {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?q=cat&api_key=6D5sLI5HrqyEfqbEpmAPI0IpaZdeziHp`,
        success: function (response) {
            const url = response.data[0].embed_url;
            $("#frame").attr("src", url);
        },
    });
};

fetch("isbn", 9789814561778);
