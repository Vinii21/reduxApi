import {configureStore} from "@reduxjs/toolkit";
import gamesSlice from "./slices/games.slice"; 

export default configureStore({
    reducer: {
        gamesSlice
    }
})