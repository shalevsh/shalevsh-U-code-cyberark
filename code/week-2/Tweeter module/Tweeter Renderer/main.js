const tweeterManager = TweeterModule();
const renderer = Renderer()

renderer.renderPosts(tweeterManager.getPosts())