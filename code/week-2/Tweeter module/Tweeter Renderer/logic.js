const TweeterModule = () => {
    let _posts = [
        {
            id: "p1",
            text: "p1",
            comments: [{ id: "c1", text: "p1c1" }],
        },
        {
            id: "p2",
            text: "p2",
            comments: [
                { id: "c2", text: "p2c1" },
                { id: "c3", text: "p2c2" },
            ],
        },
        {
            id: "p3",
            text: "p3",
            comments: [
                { id: "c4", text: "p3c1" },
                { id: "c5", text: "p3c2" },
                { id: "c6", text: "p3c3" },
            ],
        },
        {
            id: "p4",
            text: "p4",
            comments: [{ id: "c7", text: "p4c1" }],
        },
        {
            id: "p5",
            text: "p5",
            comments: [],
        },
        {
            id: "p6",
            text: "p6",
            comments: [{ id: "c8", text: "p6c1" }],
        },
    ];
    
    let _postId = 1;
    let _commentId = 1;
    const getPosts = () => _posts

    const addPost = (postText) =>  _posts.push({ text: postText, id: "p" + _postId++, comments: [] });
        
    const removePost = (postId) => _posts = _posts.filter(post => post.id !== postId);

    const addComment = (postId,commentText) => {
        for (const post of _posts) {
            if (postId === post.id) {
                post.comments.push({ id: "c" + _commentId++, text: commentText });
                }
        } 
    }
    const removeComment = (postId, commentId) => {
        for (const post of _posts) {
            if (postId === post.id) {
                post.comments = post.comments.filter(comment => comment.id !== commentId);
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    };
}

    

