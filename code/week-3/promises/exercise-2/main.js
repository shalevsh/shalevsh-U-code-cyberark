$.get("https://random-word-api.herokuapp.com/word").then(function (word) {
    const book = $.get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    ).catch(function (error) {
        console.log(error);
    });
    const gif = $.get(
        `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=6D5sLI5HrqyEfqbEpmAPI0IpaZdeziHp`
    ).catch(function (error) {
        console.log(error);
    });
    Promise.all([book, gif]).then(function (results) {
        const url = results[1].data[0].embed_url;
        $("#frame").attr("src", url);
    });
});
