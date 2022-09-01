let constants = require("./consts.js");

function handleComplaint(complaint) {
    switch (complaint) {
        case constants.FINANCE:
            console.log(`Money doesn’t grow on trees, you know.`);
            break;
        case constants.WEATHER:
            console.log(`It is the way of nature. Not much to be done.`);
            break;
        case constants.EMOTIONS:
            console.log(`It’ll pass, as all things do, with time.`);
            break;
        default:
        // code block
    }
}

module.exports = {
    constants,
    handleComplaint,
};
