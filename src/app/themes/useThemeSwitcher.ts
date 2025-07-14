import {type Theme} from "@mui/material";
import useGeneral from "../features/general/useGeneral.ts";
import {theme as lightTheme} from "./light-theme/theme.ts";
import {theme as darkTheme} from "./dark-theme/theme.ts";

const useThemeSwitcher = (): Theme => {
    const {themeName} = useGeneral();

    switch (themeName) {
        case 'dark':
            return darkTheme;
        case 'light':
        default:
            return lightTheme;
    }
}

export default useThemeSwitcher;