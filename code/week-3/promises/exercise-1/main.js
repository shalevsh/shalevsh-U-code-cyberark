$.get("https://random-word-api.herokuapp.com/word")
    .then(function (word) {
        $.get(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
        ).then((res) => console.log(res));
    })
    .catch(function (error) {
        console.log(error);
    });
