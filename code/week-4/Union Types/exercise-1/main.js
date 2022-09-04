"use strict";
function concat(strArray, isPrint) {
    if (Array.isArray(strArray)) {
        strArray = strArray.join(' ');
    }
    else if (typeof strArray !== 'string') {
        console.log(`Function doesn't support type ${typeof strArray}`);
    }
    if ((typeof isPrint === 'boolean' && isPrint) || (typeof isPrint === 'number' && isPrint === 1)) {
        console.log(strArray);
    }
    else if ((typeof isPrint !== 'boolean' && !isPrint)) {
        console.log(`Function doesn't support 'isPrinted' with value '${isPrint}'`);
    }
}
concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);
