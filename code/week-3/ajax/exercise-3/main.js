const fetch = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach((book) => {
                //console.log(book);
                // ISBN
                console.log(book.volumeInfo.title);
                console.log(book.volumeInfo.authors[0]);
            });
        },
    });
};

fetch("isbn", 9789814561778);
