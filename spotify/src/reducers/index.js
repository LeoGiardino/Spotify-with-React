// src/reducers/index.js
// reducers (initialState, actions)

export default function storeReducer(state = { currentSong: [] }, action) {
    console.log(action);

    switch (action.type) {
        case "CANZONE_RIPORODOTTA":
            return {
                ...state,
                currentSong: [...state.currentSong, action.payload],
            };

    }

    return state;
}
