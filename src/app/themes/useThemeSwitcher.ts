import {type Theme} from "@mui/material";
import useGeneral from "../features/general/useGeneral.ts";
import {theme as lightTheme} from "./light-theme/theme.ts";
import {theme as darkTheme} from "./dark-theme/theme.ts";
import {useEffect, useState} from "react";

const useThemeSwitcher = (): Theme => {
    const {themeName} = useGeneral();
    const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Функция для проверки системной темы
        const updateTheme = () => {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setSystemTheme(isDarkMode ? 'dark' : 'light');
        };

        // Проверяем тему при монтировании компонента
        updateTheme();

        // Подписываемся на изменения системной темы
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => updateTheme();

        mediaQuery.addEventListener('change', handleChange);

        // Очищаем слушатель при размонтировании
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);


    switch (themeName) {
        case 'dark':
            return darkTheme;
        case 'light':
            return lightTheme;
        default:
            if (systemTheme === 'dark') {
                return darkTheme;
            } else return lightTheme;
    }
}

export default useThemeSwitcher;