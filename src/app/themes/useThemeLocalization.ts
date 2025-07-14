import {useCallback} from "react";
import {type ThemeName} from "./themesConfig.ts";
import {useTranslation} from "react-i18next";

const useThemeLocalization = () => {
    const {t} = useTranslation();

    return useCallback((themeName: ThemeName) => {
        switch (themeName) {
            case 'dark':
                return t('themes.dark');
            case 'light':
                return t('themes.light');
            case 'system':
            default:
                return t('themes.system');
        }
    }, [t])
}

export default useThemeLocalization;