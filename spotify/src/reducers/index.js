
// funzione chi mi ritornerà sempre lo stato,
// prende 2 parametri: lo stato attuale e l'azione
export default function storeReducer(state = [], action) {
    console.log(action);

    switch (action.type) {
        case 'CURRENT_SONG':
            return [...state, action.payload];
    }
    return state;
}

/* 

function func(x, y=2){
    return x + y
}

func(5,3) = 8
func(5) = 7

*/