import themeStorage from "../../localStorages/themeStorage.ts";
import type {ThemeName} from "../../../themes/themesConfig.ts";
import CommonStorage, {type CommonState} from "../../localStorages/commonStorage.ts";

export interface State {
    windowTitle: string;
    themeName: ThemeName;
    common: CommonState;
    isSideMenuDrawerOpened: boolean;
}

export const initialState: State = {
    windowTitle: 'Character Creator',
    themeName: themeStorage.getTheme() ?? 'dark',
    common: CommonStorage.getCommonState() ?? {
        sidePanelMode: 'compact'
    },
    isSideMenuDrawerOpened: false
}