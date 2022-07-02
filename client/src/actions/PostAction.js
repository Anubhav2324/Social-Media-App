import * as PostApi from '../api/PostRequest'

export const getTimelinePosts = (id) => async(dispatch) => {
    dispatch({type: "TIMELINEPOST_START"})
    try {
        const {data} = await PostApi.getTimelinePosts(id)
        dispatch({type: "TIMELINEPOST_SUCCESS", data: data})
    } catch (error) {
        console.log(error);
        dispatch({type: "TIMELINEPOST_FAIL"})
    }
}