import {useCallback} from "react";
import {type ThemeName} from "./themesConfig.ts";
import {useTranslation} from "react-i18next";

const useThemeLocalization = () => {
    const { t } = useTranslation();
    
    return useCallback((themeName: ThemeName) => {
        switch (themeName) {
            case 'dark':
                return t('themes.dark');
            case 'light':
            default:
                return t('themes.light');
        }
    }, [t])
}

export default useThemeLocalization;