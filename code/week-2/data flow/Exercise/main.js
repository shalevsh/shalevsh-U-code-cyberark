const posts = [
    { name: "ori", text: "orange" },
    { name: "shalev", text: "yellow" },
    { name: "ohad", text: "brown" },
    { name: "ron", text: "brown" },
    { name: "maor", text: "yellow" },
    { name: "ziv", text: "green" },
    { name: "yehonatan", text: "orange" },
    { name: "eden", text: "orange" },
];
const render = function () {
    $("div").remove();
    const space = "         ";
    posts.forEach((post) => {
        $("body").append(`<div>${post.name}${space}${post.text}</div> `);
    });
};
render();
$("#post-btn").click(() => {
    const name = $("#username").val();
    const text = $("#content").val();
    posts.push({ name: name, text: text });
    render();
    $("#username").val("");
    $("#content").val("");
});
