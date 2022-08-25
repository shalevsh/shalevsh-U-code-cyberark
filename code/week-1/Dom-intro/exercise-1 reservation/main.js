const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
};

const checkReservation = function () {
    let titleText;
    const name = document.getElementById("input").value;
    if (reservations[name]) {
        if (reservations[name].claimed) {
            titleText = `Welcome, ${name}`;
        } else {
            titleText = "Hmm, someone already claimed this reservation";
        }
    } else {
        reservations[name] = { claimed: true };
        titleText = "You have no reservation";
    }
    document.getElementById("header").innerHTML = titleText;
};
