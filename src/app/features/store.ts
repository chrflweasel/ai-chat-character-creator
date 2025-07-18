import { configureStore } from "@reduxjs/toolkit"
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import GeneralSlice from "./general/generalSlice";

const store = configureStore({
    reducer: {
        general: GeneralSlice,
    }})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector