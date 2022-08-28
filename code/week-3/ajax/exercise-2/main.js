const fetch = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            console.log(data.items[0].volumeInfo.title);
        },
    });
};

fetch("isbn", 9789814561778);
