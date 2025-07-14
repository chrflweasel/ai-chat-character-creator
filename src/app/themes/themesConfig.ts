export const themeNames = ['light', 'dark', 'system'] as const;
export type ThemeName = typeof themeNames[number];

export const stringToThemeName = (themeName: string | null): ThemeName | null => {
    if (themeName === null) {
        return null;
    }
    const possibleTheme = themeName as ThemeName;
    return themeNames.includes(possibleTheme) ? possibleTheme : null;
};