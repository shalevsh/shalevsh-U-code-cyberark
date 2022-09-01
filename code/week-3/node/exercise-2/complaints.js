const handler = require("./complaintsHandler.js");

let complaint1 = {
    text: "I'm not getting enough money",
    type: handler.constants.WEATHER,
};

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: handler.constants.FINANCE,
};

let complaint3 = {
    text: "I'm always full of energy",
    type: handler.constants.EMOTIONS,
};

handler.handleComplaint(complaint1.type); //should print "Money doesn't grow on trees, you know."
handler.handleComplaint(complaint2.type); //should print "Money doesn't grow on trees, you know."
handler.handleComplaint(complaint3.type); //should print "It'll pass, as all things do, with time."
