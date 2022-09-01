import validator from "validator";
import { phone } from "phone";
// /Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail("shoobert@dylan"));
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(phone("(817) 569-8900", { country: "USA" }).isValid);

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
console.log(validator.blacklist(text, blacklist));

//Ultimately, it should print "im so excited"
