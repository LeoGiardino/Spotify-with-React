export const playSong = (songData) => {
    return {
      type: 'CURRENT_SONG',
      payload: songData,
    };
  };