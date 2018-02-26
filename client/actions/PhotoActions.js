export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receiveAllPhotos = (photos) => ({

    type: RECEIVE_ALL_PHOTOS,
    photos
}
);

export const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
})