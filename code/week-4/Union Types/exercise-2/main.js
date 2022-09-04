"use strict";
function print_numbers(numbers) {
    if (Array.isArray(numbers)) {
        console.log("Array: " + numbers);
    }
    else if (typeof numbers === 'string') {
        console.log('string: ' + numbers);
    }
    else if (typeof numbers === 'number') {
        console.log('number: ' + numbers);
    }
}
print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);
