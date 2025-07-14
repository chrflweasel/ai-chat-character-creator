import Config from "../config.ts";

const COMMON_STORAGE = Config.localStoragePrefix + 'common';

export interface CommonState {
    sidePanelMode: 'compact' | 'full'
}

class CommonStorage {
    static getCommonState(): CommonState | null {
        const storedValue = localStorage.getItem(COMMON_STORAGE);
        if (storedValue) {
            try {
                return JSON.parse(storedValue) as CommonState;
            } catch (error) {
                console.error("Failed to parse CommonState from local storage:", error);
                return null;
            }
        }
        return null;
    }

    static setCommonState(state: CommonState) {
        localStorage.setItem(COMMON_STORAGE, JSON.stringify(state));
    }
}

export default CommonStorage;