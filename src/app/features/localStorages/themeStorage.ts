import Config from "../config.ts";
import {stringToThemeName, type ThemeName} from "../../themes/themesConfig.ts";

const THEME = Config.localStoragePrefix + 'theme';

class ThemeStorage {
    static getTheme() : ThemeName | null {
        return stringToThemeName(localStorage.getItem(THEME));
    }
    static setTheme(theme: ThemeName) {
        localStorage.setItem(THEME, theme);
    }
}

export default ThemeStorage;