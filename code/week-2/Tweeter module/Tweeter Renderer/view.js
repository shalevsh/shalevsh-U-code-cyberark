const Renderer = () => {
    const renderPosts = function (posts) {
        $(".post").remove();
        posts.forEach((post) => {
            $("#posts").append(
                `<div class="post" "post-text" id=${post.id}>${
                    (post.id, post.text)
                }</div>`
            );
            console.log(post);
            const comments = post.comments;
            comments.forEach((comment) => {
                $(`#${post.id}`).append(
                    `<div class="comments"  id="comment.id">${
                        (comment.id, comment.text)
                    }</div>`
                );
            });
        });
    };
    return {
        renderPosts,
    };
};
