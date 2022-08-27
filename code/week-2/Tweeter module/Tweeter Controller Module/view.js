const Renderer = () => {
    const renderPosts = function (posts) {
        cleanPostsFromDom();
        addPostsToDom(posts);
        addTrashIconToPosts();
        addTrashIconToComments();
    };

    function cleanPostsFromDom() {
        $(".post").remove();
    }
    function addPostsToDom(posts) {
        posts.forEach((post) => {
            $("#posts").append(
                `<div class="post" id=${post.id}>
                <span class="post-text">${(post.id, post.text)}</span>
                <br><br>
                </div>`
            );

            const comments = post.comments;
            comments.forEach((comment) => {
                $(`#${post.id}`).append(
                    `<div class="comments" id=${comment.id}>${
                        (comment.id, comment.text)
                    }</div>`
                );
            });
            $(`#${post.id}`).append(
                `<input type="text" placeholder="Pls write some comment ..." class="input-comment">`
            );
            $(`#${post.id}`).append(
                `<input type="submit" value="Comment" class="comment-submit">`
            );
        });
    }

    function addTrashIconToPosts() {
        $(".post").prepend(`<br>`);
        $(".post").prepend(`<i class="fa fa-trash" aria-hidden="true"></i>`);
    }

    function addTrashIconToComments() {
        $(".comments").append(`<i class="fa fa-trash" aria-hidden="true"></i>`);
    }

    return {
        renderPosts,
    };
};
