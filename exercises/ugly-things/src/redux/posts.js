const postsReducer = (prevPosts = [], action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...prevPosts, action.post]
        case "DELETE_POST":
            return [...prevPosts].filter((post, i)=> {
                return (i !== action.index);
            })
        default:
            return prevPosts;
    }
}

export const addPost = (post) => {
    return {
        type: "ADD_POST",
        post
    }
}

export const deletePost = (index) => {
    return {
        type: "DELETE_POST",
        index
    }
}

export default postsReducer;