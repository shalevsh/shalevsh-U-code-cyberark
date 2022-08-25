//exercise 1

// const push = function () {
//     console.log("pushing it!");
// };

// const pull = function () {
//     console.log("pulling it!");
// };

// function pushPull(someFunction) {
//     someFunction();
// }
// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"

//exercise 2
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }

//   function getTime(func){
//     const time = new Date()
//     func(time);
//   }
//   getTime(returnTime)

//exercise 3

// const displayData = function (alertDataFunc, logDataFunc , data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = console.log
//   displayData(alert, logData, "I like to party")

//exercise 4
// const sum = (a,b,c) => a+b+c;

//exercise 5
// const capitalize = (str) => {
//     str = str.toLowerCase();
//     const firstChar = str.charAt(0).toUpperCase();
//     str = str.substring(1);
//     return firstChar + str;
// };
// capitalize("bOb"); // returns Bob
// capitalize("TAYLOR"); // returns Taylor
// capitalize("feliSHIA"); // returns Felishia

//exercise 6
// const commentOnWeathe = (temp) => {
//     "its " + determineWeather(temp);
// };
// const determineWeather = (temp) => {
//     if (temp > 25) {
//         return "hot";
//     }
//     return "cold";
// };
// commentOnWeather(30); //returns "It's hot"
// commentOnWeather(22); //returns "It's cold"

//exercise 7

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc();
    soundFunc(sound);
};

const shineLight = () =>
    (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

explode(shineLight, makeSound, "BOOM");
