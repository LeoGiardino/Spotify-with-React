export const playSong = (songData) => {
  const obj = {
    song: { ...songData }
  };

  console.log(songData);
  return {
    type: 'CURRENT_SONG',
    payload: obj,
  };
};

export const addLike = (songData) => {
  const obj = {
    song: { ...songData }
  };

  console.log(songData);
  return {
    type: 'ADD_LIKE',
    payload: obj,
  };
};