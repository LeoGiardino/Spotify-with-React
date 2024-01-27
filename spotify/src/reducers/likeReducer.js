export default function storeReducer(state = [], action) {

    console.log('Current State:', state);
    console.log('Action:', action);
    switch (action.type) {
        case 'ADD_LIKE':
          const songsToAdd = Array.isArray(action.payload.song) ? action.payload.song : [action.payload.song];
          return {
            ...state,
            song: (state.song || []).concat(songsToAdd)
          };
        default:
          return state;
      }
    }