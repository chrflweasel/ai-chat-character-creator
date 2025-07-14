import type {State} from "./state";

export interface HookInterface extends State {
    setPageName: (pageName?: string) => void
}