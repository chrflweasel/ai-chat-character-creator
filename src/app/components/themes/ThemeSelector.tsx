import {type FC } from "react";
import {
    FormControl,
    MenuItem,
    Select,
    type SelectChangeEvent,
} from "@mui/material";
import useGeneral from "../../features/general/useGeneral.ts";
import {type ThemeName, themeNames} from "../../themes/themesConfig.ts";
import {setThemeName} from "../../features/general/generalSlice.ts";
import { useAppDispatch } from "../../features/store.ts";
import useThemeLocalization from "../../themes/useThemeLocalization.ts";
import themeStorage from "../../features/localStorages/themeStorage.ts";

const ThemeSelector: FC = () => {
    const dispatch = useAppDispatch();
    const { themeName } = useGeneral();
    const getLocalizedThemeName = useThemeLocalization();


    const handleThemeChange = (event: SelectChangeEvent<ThemeName>) => {
        const newTheme = event.target.value as ThemeName;
        dispatch(setThemeName(newTheme));
        themeStorage.setTheme(newTheme);
    };

    return (
            <FormControl
                size={'small'} variant={'outlined'}
            >
                <Select
                    value={themeName}
                    onChange={handleThemeChange}
                >
                    {themeNames.map((themeName) => (
                        <MenuItem
                            key={themeName}
                            value={themeName}
                        >
                            {getLocalizedThemeName(themeName)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    );
};

export default ThemeSelector;