import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./models/state.ts";
import type {ThemeName} from "../../themes/themesConfig.ts";
import CommonStorage, {type CommonState} from "../localStorages/commonStorage.ts";

const GeneralSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setWindowTitle: (state, action: PayloadAction<string>) => {
            state.windowTitle = action.payload;
        },
        setThemeName: (state, action: PayloadAction<ThemeName>) => {
            state.themeName = action.payload;
        },
        setCommonState: (state, action: PayloadAction<CommonState>) => {
            state.common = action.payload;
            CommonStorage.setCommonState(action.payload);
        },
        setSideMenuOpened: (state, action: PayloadAction<boolean>) => {
            state.isSideMenuDrawerOpened = action.payload;
        }
    }
});

export default GeneralSlice.reducer;

export const {
    setWindowTitle,
    setThemeName,
    setCommonState,
    setSideMenuOpened
} = GeneralSlice.actions