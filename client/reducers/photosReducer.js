import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/PhotoActions';

const photosReducer = (
    state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
        const photos = action.photos;
        return photos;
        case RECEIVE_PHOTO:
            return action.photo;
        default:
            return state;

    }
}

export default photosReducer;