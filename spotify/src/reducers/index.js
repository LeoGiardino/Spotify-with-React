
// funzione chi mi ritornerà sempre lo stato,
// prende 2 parametri: lo stato attuale e l'azione
export default function storeReducer(state = [], action) {

    console.log('Current State:', state);
    console.log('Action:', action);
    switch (action.type) {
        case 'CURRENT_SONG':
          const songsToAdd = Array.isArray(action.payload.song) ? action.payload.song : [action.payload.song];
          return {
            ...state,
            song: (state.song || []).concat(songsToAdd)
          };
        default:
          return state;
      }
    }

/* 

function func(x, y=2){
    return x + y
}

func(5,3) = 8
func(5) = 7

*/