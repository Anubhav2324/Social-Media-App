export const postReducer = (state = { posts: null, loading: false, error: false, uploading: false }, action) => {
    switch (action.type) {
        case "UPLOAD_START":
            return { ...state, uploading: true, error: false }
        case "UPLOAD_SUCCESS":
            // localStorage.setItem("profile", JSON.stringify({...action.data}))
            return { ...state, posts: [action.data,...state.posts], uploading: false, error: false }
        case "UPLOAD_FAIL":
            return { ...state, uploading: false, error: true }

        case "TIMELINEPOST_START":
            return { ...state, loading: true, error: false };
        case "TIMELINEPOST_SUCCESS":
            return { ...state, posts: action.data, loading: false, error: false };
        case "TIMELINEPOST_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state
    }

}