let wisdom = [];

$("body").on("click", "#submit", function () {
    clickHandle();
});
$("body").on("click", "#delete", function () {
  localStorage.removeItem('wisdom');
});

function clickHandle() {
    const inputElem = $("#input");
    const divElem = $(".content");
    const text = inputElem.val();
    inputElem.val("");
    wisdom.push(text);
    let data;
    if (wisdom.length > 0 && wisdom.length % 2 === 0) {
        data = wisdom.map((text) => {
            return { text: text };
        });
        wisdom.forEach((txt) => (text = `\n ${txt}`));
    } else {
        data = { text: text };
    }
    localStorage.wisdom  = JSON.stringify(data);
    divElem.text(text);
}

function refresh() {
    const divElem = $(".content");
    wisdom.forEach((txt) => (text = `\n ${txt}`));
    divElem.text(text);
}

