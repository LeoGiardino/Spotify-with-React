export const playSong = (songData) => {
    return {
      type: 'CANZONE_RIPRODOTTA',
      payload: songData,
    };
  };