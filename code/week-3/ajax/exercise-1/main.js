// Remember the fetch function from before? There we had the ISBN hard-coded on each call, which is not very useful.
// Instead, add a parameter to the function that accepts an ISBN, and modify your function so that it searches for info about the book with that ISBN.
// For instance, if you call fetch(9780575087057), you should receive data about the best book in the world: Name of the Wind.
// You can test your function with the following ISBNs, as well:
const fetch = ISBN =>{
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
        success: function(data) {
          console.log(data.items[0].volumeInfo.title);
        }
      })
      }
    
    //fetch(9782806269171);
      //fetch(1440633908);
      //fetch(9781945048470);
      //fetch(9780307417138);


 
