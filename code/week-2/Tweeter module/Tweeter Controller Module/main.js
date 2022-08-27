const tweeterManager = TweeterModule();
const renderer = Renderer();

//on load
renderer.renderPosts(tweeterManager.getPosts());

//on adding post
clickListenerToAddPost();

//on delete item (post or comment)
clickListenerToDelete();

//on adding comment
clickListenerToAddComment();

//listener for flexible input
autuSizeTextAreaListner();

function autuSizeTextAreaListner() {
    document.addEventListener(
        "input",
        function (event) {
            if (event.target.tagName.toLowerCase() !== "textarea") return;
        },
        false
    );
}

function clickListenerToAddPost() {
    $("body").on("click", "#post", function () {
        console.log("Add Post");
        console.log("____________");
        const inputElement = $(this).siblings("textarea");
        const postText = inputElement.val();
        inputElement.val("");
        console.log(postText, "post text");
        tweeterManager.addPost(postText);
        console.log(
            tweeterManager.getPosts(),
            "posts and comments after adding post"
        );
        renderer.renderPosts(tweeterManager.getPosts());
    });
}

function clickListenerToDelete() {
    $("body").on("click", ".fa-trash", function () {
        let postId;
        let commentId;
        let isPost = true;
        console.log("clicked on delete icon !");
        isPost = $(this).parent().attr("class") === "post" ? true : false;
        if (isPost) {
            console.log("delete post");
            console.log("____________");
            postId = $(this).parent().attr("id");
            console.log(postId, "postId");
        } else {
            console.log("delete comment");
            console.log("______________");
            postId = $(this).parent().parent().attr("id");
            console.log(postId, "postId");
            commentId = $(this).parent().attr("id");
            console.log(commentId, "commentId");
        }
        $(this).parent().remove();
        isPost
            ? tweeterManager.removePost(postId)
            : tweeterManager.removeComment(postId, commentId);
        console.log(
            tweeterManager.getPosts(),
            "posts and comments after delete"
        );
        renderer.renderPosts(tweeterManager.getPosts());
    });
}

function clickListenerToAddComment() {
    $("body").on("click", ".comment-submit", function () {
        console.log("Add Comment");
        console.log("____________");
        const postId = $(this).parent().attr("id");
        console.log(postId, "postId");
        const commentText = $(this).siblings("textarea").val();
        console.log(commentText, "commentText");
        tweeterManager.addComment(postId, commentText);
        console.log(
            tweeterManager.getPosts(),
            "posts and comments after adding comment"
        );
        renderer.renderPosts(tweeterManager.getPosts());
    });
}
