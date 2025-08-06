import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import initialState from "./models/state.ts";
import type {PersonaSection} from "./models/model.ts";

const personaSlice = createSlice({
    name: 'persona',
    initialState,
    reducers: {
        addSection: (state, action: PayloadAction<PersonaSection>) => {
            state.currentPersonaSections.push(action.payload);
        },
        setEditingSectionId: (state, action: PayloadAction<string | null>) => {
            state.editingSectionId = action.payload;
        }
    }
});

export const {addSection, setEditingSectionId} = personaSlice.actions;

export default personaSlice.reducer;