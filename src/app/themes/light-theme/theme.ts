import {createTheme} from "@mui/material";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600-italic.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/open-sans/800-italic.css";

export const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans"'
    },
    spacing: 10,
    breakpoints: {
        values: {
            xs: 450,
            sm: 768,
            md: 960,
            lg: 1200,
            xl: 1536
        }
    },
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
            paper: '#f2f6f8',
        },
        primary: {
            main: '#05B3F0',
            contrastText: '#fff'
        },
        tagColors: {
            es: '#FFC107',
            pt: '#FF5722',
            en: '#2196F3',
            fr: '#3F51B5',
            ar: '#9C27B0',
            vi: '#8BC34A',
            tr: '#FF9800',
            de: '#607D8B',
            ru: '#F44336',
            easter: '#FFEB3B'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (_theme) => ({
                '& html, body, #root': {
                    maxWidth: '100vw',
                    overflow: 'hidden',
                    height: '100dvh',
                },
                body: {
                    margin: 0,
                },
                a: {
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'inherit'
                    },
                }
            }),
        },
    }
})