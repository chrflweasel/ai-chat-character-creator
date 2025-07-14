import type {HookInterface} from "./models/hook.interface.ts";
import {useAppDispatch, useAppSelector} from "../store.ts";
import {useCallback} from "react";
import {setWindowTitle} from "./generalSlice.ts";

const useGeneral = (): HookInterface => {
    const state = useAppSelector(state => state.general);
    const dispatch = useAppDispatch();

    const setPageName = useCallback((pageName?: string) => {
        const title = 'Character Creator';
        dispatch(setWindowTitle(pageName ? `${title} | ${pageName}` : title));
    }, [dispatch])

    return {
        ...state,
        setPageName
    }
}

export default useGeneral;